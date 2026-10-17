'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function signInWithGithub() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        },
    })

    if (error) return { error: error.message }
    if (data.url) redirect(data.url)
}

export async function submitEntry(prevState, formData) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Not authenticated' }

    const message = formData.get('message')?.toString().trim()
    if (!message) return { error: 'Message is empty' }
    if (message.length > 250) return { error: 'Message was too long' }

    const username =
        user.user_metadata?.user_name ||
        user.user_metadata?.preferred_username ||
        null

    if (!username) return { error: 'Could not determine GitHub username' }

    const { error } = await supabase.from('guestbook').insert({
        user_id: user.id,
        github_username: username,
        avatar_url: user.user_metadata?.avatar_url ?? null,
        message,
    })

    if (error) return { error: error.message }

    revalidatePath('/guestbook')
    return { success: true }
}

export async function deleteEntry(id) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Not authenticated' }
    if (!id) return { error: 'Invalid ID' }

    const { error } = await supabase
        .from('guestbook')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id) // Defense in depth

    if (error) return { error: error.message }

    revalidatePath('/guestbook')
    return { success: true }
}

export async function toggleLike(guestbookId) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Not authenticated' }
    if (!guestbookId) return { error: 'Invalid ID' }

    const { data: existing, error: fetchError } = await supabase
        .from('guestbook_likes')
        .select('id')
        .eq('guestbook_id', guestbookId)
        .eq('user_id', user.id)
        .maybeSingle()

    if (fetchError) return { error: fetchError.message }

    if (existing) {
        const { error } = await supabase
            .from('guestbook_likes')
            .delete()
            .eq('id', existing.id)
        if (error) return { error: error.message }
    } else {
        const { error } = await supabase
            .from('guestbook_likes')
            .insert({ guestbook_id: guestbookId, user_id: user.id })
        if (error) return { error: error.message }
    }

    revalidatePath('/guestbook')
    return { success: true }
}
