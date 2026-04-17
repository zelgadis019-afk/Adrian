import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Adrian Tapia</div>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/adrian-tapia-ab8ab8245/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/zelgadis019-afk" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:adriantapia1994@gmail.com">Email</a>
      </div>
      <div className={styles.copy}>&copy; {new Date().getFullYear()} Adrian Tapia</div>
    </footer>
  )
}
