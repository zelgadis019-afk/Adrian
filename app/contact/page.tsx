'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './contact.module.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { error } = await supabase.from('contact_messages').insert([{
        name: form.name,
        email: form.email,
        message: form.message,
        created_at: new Date().toISOString(),
      }])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className="section-label">05 — Contact</div>
          <div className="section-title">Let&apos;s <em>connect</em></div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.info}>
            <p className={styles.intro}>
              Have an opportunity, project, or question? Feel free to reach out — I&apos;m always open to a good conversation.
            </p>
            <div className={styles.links}>
              <a href="mailto:adriantapia1994@gmail.com" className={styles.link}>
                <div className={styles.icon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                </div>
                adriantapia1994@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/adrian-tapia-ab8ab8245/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <div className={styles.icon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                linkedin.com/in/adrian-tapia
              </a>
              <a href="https://github.com/zelgadis019-afk" target="_blank" rel="noopener noreferrer" className={styles.link}>
                <div className={styles.icon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                github.com/zelgadis019-afk
              </a>
              <div className={styles.link} style={{cursor:'default'}}>
                <div className={styles.icon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                Trece Martires, Cavite, Philippines
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label className={styles.label}>Your name</label>
              <input
                name="name"
                type="text"
                className={styles.input}
                placeholder="Juan dela Cruz"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Email address</label>
              <input
                name="email"
                type="email"
                className={styles.input}
                placeholder="juan@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Tell me what's on your mind…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send message →'}
            </button>
            {status === 'success' && (
              <div className={styles.success}>Message sent — I&apos;ll get back to you soon.</div>
            )}
            {status === 'error' && (
              <div className={styles.error}>Something went wrong. Please email me directly.</div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
