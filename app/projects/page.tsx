import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import styles from './projects.module.css'

// Fallback data if no Supabase projects yet
const fallbackProjects = [
  {
    id: 1,
    title: 'This Portfolio Website',
    description: 'My first personal project — a fully deployed dark portfolio with a blog, contact form, and Supabase backend. Built with Next.js, deployed on Vercel, with Supabase for data storage.',
    tech: ['Next.js','Supabase','Vercel','TypeScript'],
    link: null,
    github: 'https://github.com/zelgadis019-afk',
  },
]

export default async function ProjectsPage() {
  // Try fetching from Supabase; fall back gracefully if table doesn't exist yet
  let projects = fallbackProjects
  try {
    const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false })
    if (!error && data && data.length > 0) projects = data
  } catch (_) {}

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="section-label">03 — Projects</div>
          <div className="section-title">Things I&apos;ve <em>built</em></div>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardNum}>0{i + 1}</div>
              <div className={styles.cardTitle}>{project.title}</div>
              <div className={styles.cardDesc}>{project.description}</div>
              {project.tech && (
                <div className={styles.cardTags}>
                  {(Array.isArray(project.tech) ? project.tech : project.tech.split(',')).map((t: string) => (
                    <span key={t} className={styles.cardTag}>{t.trim()}</span>
                  ))}
                </div>
              )}
              <div className={styles.cardLinks}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Live site ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
          {/* Coming soon placeholders */}
          <div className={`${styles.card} ${styles.cardEmpty}`}>
            <div className={styles.cardEmptyText}>Coming soon</div>
            <div className={styles.cardEmptySub}>Next project in progress</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
