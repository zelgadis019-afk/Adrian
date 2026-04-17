import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import styles from './blog.module.css'
import Link from 'next/link'

export const revalidate = 0

export default async function BlogPage() {
  let posts: any[] = []
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, excerpt, created_at, slug')
      .eq('published', true)
      .order('created_at', { ascending: false })
    if (!error && data) posts = data
  } catch (_) {}

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="section-label">04 — Blog</div>
          <div className="section-title">Thoughts &amp; <em>writings</em></div>
        </div>
        {posts.length === 0 ? (
          <div className={styles.empty}>
            <p>No posts yet.</p>
            <span>First article coming soon — check back later.</span>
          </div>
        ) : (
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.date}>
                  {new Date(post.created_at).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}
                </div>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.excerpt}>{post.excerpt}</div>
                <div className={styles.readMore}>Read article →</div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
