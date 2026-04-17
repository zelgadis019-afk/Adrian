# Adrian Tapia — Portfolio Website

A dark, classy personal portfolio built with **Next.js 14**, **Supabase**, and deployed on **Vercel**.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework (pages, routing, SSR) |
| TypeScript | Type-safe code |
| Supabase | Database (contact form, blog, projects) |
| Vercel | Hosting & automatic deployment |
| GitHub | Code storage & version control |

---

## Project Structure

```
adrian-portfolio/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Homepage (Hero + About + Experience)
│   ├── page.module.css
│   ├── not-found.tsx       # 404 page
│   ├── projects/
│   │   ├── page.tsx        # Projects page (reads from Supabase)
│   │   └── projects.module.css
│   ├── blog/
│   │   ├── page.tsx        # Blog listing (reads from Supabase)
│   │   ├── blog.module.css
│   │   └── [slug]/
│   │       ├── page.tsx    # Individual blog post
│   │       └── post.module.css
│   └── contact/
│       ├── page.tsx        # Contact form (saves to Supabase)
│       └── contact.module.css
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── Footer.tsx
│   └── Footer.module.css
├── lib/
│   └── supabase.ts         # Supabase client
├── styles/
│   └── globals.css         # Design system & global styles
├── supabase-setup.sql      # Run this in Supabase SQL Editor
├── .env.local              # Your secret keys (DO NOT commit)
├── .env.example            # Safe template to commit
└── .gitignore
```

---

## Step-by-Step Setup Guide

### Step 1 — Install Node.js
1. Go to https://nodejs.org
2. Download the **LTS** version and install it
3. Open Terminal (Mac) or Command Prompt (Windows)
4. Type `node -v` — you should see a version number

---

### Step 2 — Set up GitHub
1. Go to https://github.com and create a free account
2. Click **New repository**
3. Name it `adrian-tapia-portfolio`
4. Set it to **Private**
5. Click **Create repository**
6. Follow GitHub's instructions to push this folder to the repo

---

### Step 3 — Set up Supabase
1. Go to https://supabase.com and create a free account
2. Click **New project** — choose a name and password
3. Wait for it to set up (~1 minute)
4. Go to **SQL Editor** → **New Query**
5. Copy the contents of `supabase-setup.sql` and paste it in
6. Click **Run** — this creates your 3 tables
7. Go to **Settings** → **API**
8. Copy your **Project URL** and **anon public** key

---

### Step 4 — Add your environment variables
1. Open the file `.env.local` in this folder
2. Replace the placeholder values with your real Supabase values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-real-key-here
   ```
3. Save the file — **never commit this file to GitHub** (it's in .gitignore)

---

### Step 5 — Run locally to test
```bash
# In your project folder, run:
npm install
npm run dev
```
Open http://localhost:3000 in your browser — you should see your portfolio!

---

### Step 6 — Deploy on Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `adrian-tapia-portfolio` repository
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL` → your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → your Supabase anon key
5. Click **Deploy**
6. Your site is now live at `adrian-tapia-portfolio.vercel.app` 🎉

---

## How to add a blog post

In Supabase:
1. Go to **Table Editor** → `blog_posts`
2. Click **Insert row**
3. Fill in:
   - `title` — your post title
   - `slug` — URL version e.g. `my-first-blog-post`
   - `excerpt` — one sentence summary
   - `content` — write your post content as HTML (e.g. `<p>Hello world</p>`)
   - `published` — set to `true` to make it live
4. Click **Save** — it appears on your site instantly!

---

## How to add a project

In Supabase:
1. Go to **Table Editor** → `projects`
2. Click **Insert row**
3. Fill in the title, description, tech tags, and links
4. Save — it shows on the Projects page instantly!

---

## How to add your profile photo

1. Replace the placeholder in `app/page.tsx`
2. Find the `photoPlaceholder` div and replace it with:
   ```jsx
   <Image src="/photo.jpg" alt="Adrian Tapia" fill style={{objectFit:'cover'}} />
   ```
3. Add `import Image from 'next/image'` at the top of the file
4. Put your photo file in the `/public` folder and name it `photo.jpg`

---

## Future upgrades

- Add a **dark/light mode toggle**
- Connect **Google Analytics** to see your visitors
- Add a **custom domain** (e.g. adriantapia.dev) via Vercel
- Build an **admin dashboard** to write blog posts from the browser
