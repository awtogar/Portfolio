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
    if (message.length > 500) throw new Error('Message too long')

    const username =
        user.user_metadata?.user_name ||
        user.user_metadata?.preferred_username ||
        null

    if (!username) throw new Error('Could not determine GitHub username')

    const { error } = await supabase.from('guestbook').insert({
        user_id: user.id,
        username,
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