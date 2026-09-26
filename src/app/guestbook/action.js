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

    if (error) throw new Error(error.message)
    if (data.url) redirect(data.url)
}

export async function submitEntry(formData) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

    const message = formData.get('message')?.toString().trim()
    if (!message) throw new Error('Message is empty')
    if (message.length > 250) throw new Error('Message was too long')

    const username =
        user.user_metadata?.user_name ||
        user.user_metadata?.preferred_username ||
        null

    if (!username) throw new Error('Could not determine GitHub username')

    const { error } = await supabase.from('guestbook').insert({
        user_id: user.id,
        github_username: username,
        avatar_url: user.user_metadata?.avatar_url ?? null,
        message,
    })

    if (error) throw new Error(error.message)

    revalidatePath('/guestbook')
}

export async function deleteEntry(id) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')
    if (!id) throw new Error('Invalid ID')

    const { error } = await supabase
        .from('guestbook')
        .delete()
        .eq('id', id)

    if (error) throw new Error(error.message)

    revalidatePath('/guestbook')
}

export async function toggleLike(guestbookId) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')
    if (!guestbookId) throw new Error('Invalid ID')

    const { data: existing, error: fetchError } = await supabase
        .from('guestbook_likes')
        .select('id')
        .eq('guestbook_id', guestbookId)
        .eq('user_id', user.id)
        .maybeSingle()

    if (fetchError) throw new Error(fetchError.message)

    if (existing) {
        const { error } = await supabase
            .from('guestbook_likes')
            .delete()
            .eq('id', existing.id)
        if (error) throw new Error(error.message)
    } else {
        const { error } = await supabase
            .from('guestbook_likes')
            .insert({ guestbook_id: guestbookId, user_id: user.id })
        if (error) throw new Error(error.message)
    }

    revalidatePath('/guestbook')
}