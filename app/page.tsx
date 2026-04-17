import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const skills = [
    'Active Directory','ServiceNow','Microsoft Azure','Microsoft 365',
    'Google Workspace','IT Service Desk','Onsite Support','User Provisioning',
    'Cloud Identity Mgmt','SLA Management','Data Annotation (ADAP)',
    'Troubleshooting','Onboarding / Offboarding','Group Policy',
  ]

  const experience = [
    {
      period: '2022 — Present',
      company: 'Appen',
      role: 'Platform Support Analyst',
      desc: 'Supported clients and project managers within the Appen Data Annotation Platform (ADAP). Responsible for job creation, configuration, and troubleshooting job settings for contributors, ensuring smooth platform operations and optimal project delivery.',
      tags: ['ADAP','Platform Ops','Client Support','Job Configuration'],
    },
    {
      period: '2021 — 2022',
      company: 'Appen',
      role: 'IT Support Analyst',
      desc: 'Delivered onsite technical support to production workers and corporate employees. Handled onboarding and offboarding processes, account provisioning, and administrative management across Microsoft Azure, Microsoft 365 Admin Center, and Google Workspace.',
      tags: ['Microsoft Azure','Microsoft 365','Google Workspace','Account Provisioning'],
    },
    {
      period: '2019 — 2021',
      company: 'Infosys BPM',
      role: 'Service Desk Professional',
      desc: 'Provided end-user support and managed enterprise environments. Core responsibilities included user administration, group policy management, and troubleshooting across various IT systems with hands-on expertise in Active Directory and ServiceNow.',
      tags: ['Active Directory','ServiceNow','SLA Management','Incident Resolution'],
    },
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBgText}>TAPIA</div>
        <div className={styles.heroLine} />
        <div className={styles.heroTag}>IT Support Analyst &nbsp;·&nbsp; Cavite, Philippines</div>
        <h1 className={styles.heroName}>
          Adrian<br /><em>Tapia</em>
        </h1>
        <p className={styles.heroTagline}>
          Bridging people and technology — one resolved ticket at a time.
        </p>
        <div className={styles.heroCta}>
          <Link href="#about" className="btn-primary">Explore my work ↓</Link>
          <Link href="/contact" className="btn-secondary">Get in touch</Link>
        </div>
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className={styles.section}>
        <div className="section-label">01 — About</div>
        <div className={styles.aboutGrid}>
          <div className={styles.photoWrap}>
            <div className={styles.photoPlaceholder}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="20" r="10" stroke="#888" strokeWidth="1.5"/>
                <path d="M8 50c0-11 9-18 20-18s20 7 20 18" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Your photo here</span>
            </div>
          </div>
          <div className={styles.aboutContent}>
            <div className="section-title">Driven by <em>curiosity,</em><br/>grounded in craft.</div>
            <div className={styles.bio}>
              <p>I am a Business Management graduate from STI College with over four years of progressive experience in IT support and platform operations. My background spans service desk support, onsite IT assistance, and platform support — enabling me to develop both strong technical expertise and client-facing skills.</p>
              <p>I began my career at Infosys BPM as a Service Desk Professional, providing end-user support and managing enterprise environments. I developed hands-on expertise in tools such as Active Directory and ServiceNow, ensuring efficient incident resolution and adherence to SLA standards.</p>
              <p>At Appen, I delivered onsite technical support before transitioning into a Platform Support Analyst role, where I supported clients and project managers within the Appen Data Annotation Platform. I am passionate about continuous learning, cloud technologies, and delivering reliable technical solutions.</p>
            </div>
            <div className={styles.metaGrid}>
              {[
                {label:'Location',value:'Trece Martires, Cavite'},
                {label:'Experience',value:'4+ Years'},
                {label:'Field',value:'IT Support & Ops'},
                {label:'Availability',value:'Open to opportunities'},
              ].map(m => (
                <div key={m.label} className={styles.metaItem}>
                  <div className={styles.metaLabel}>{m.label}</div>
                  <div className={styles.metaValue}>{m.value}</div>
                </div>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/adrian-tapia-ab8ab8245/" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Resume on LinkedIn ↗</a>
            <div className="section-label" style={{marginTop:'2.5rem',marginBottom:'1rem'}}>Skills &amp; Tools</div>
            <div className={styles.skillsGrid}>
              {skills.map(s => <span key={s} className={styles.skillTag}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section id="experience" className={styles.sectionDark}>
        <div className="section-label">02 — Experience</div>
        <div className="section-title">Where I&apos;ve <em>worked</em></div>
        <div className={styles.expList}>
          {experience.map((exp, i) => (
            <div key={i} className={styles.expItem}>
              <div className={styles.expPeriod}>
                <strong>{exp.company}</strong>
                {exp.period}
              </div>
              <div>
                <div className={styles.expRole}>{exp.role}</div>
                <div className={styles.expCompany}>{exp.company}</div>
                <div className={styles.expDesc}>{exp.desc}</div>
                <div className={styles.expTags}>
                  {exp.tags.map(t => <span key={t} className={styles.expTag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <Footer />
    </>
  )
}
