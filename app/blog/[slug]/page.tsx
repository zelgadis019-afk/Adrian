import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import styles from './post.module.css'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 0

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post: any = null
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', params.slug)
      .eq('published', true)
      .single()
    if (!error && data) post = data
  } catch (_) {}

  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.back}>
          <Link href="/blog" className={styles.backLink}>← Back to blog</Link>
        </div>
        <article className={styles.article}>
          <header className={styles.header}>
            <div className="section-label">Blog</div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
              })}
            </div>
          </header>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  )
}
