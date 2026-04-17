import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
        textAlign: 'center',
        background: 'var(--bg)',
      }}>
        <div style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(6rem, 15vw, 12rem)',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.04)',
          lineHeight: 1,
          marginBottom: '1rem',
        }}>404</div>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '1rem',
        }}>Page not found</div>
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.4rem',
          fontWeight: '300',
          color: 'var(--muted)',
          marginBottom: '2.5rem',
        }}>
          This page has gone missing.
        </p>
        <Link href="/" className="btn-primary">Back to home →</Link>
      </main>
    </>
  )
}
