import { supabase } from '@/lib/supabase'

export const revalidate = 0

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .single()

  return (
    <div style={{ padding: '4rem', color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1>Debug Page</h1>
      <p><strong>Slug from URL:</strong> {params.slug}</p>
      <p><strong>Error:</strong> {error ? JSON.stringify(error) : 'none'}</p>
      <p><strong>Data:</strong> {data ? JSON.stringify(data) : 'null'}</p>
    </div>
  )
}
