-- ─────────────────────────────────────────────────────────
-- Adrian Tapia Portfolio — Supabase Database Setup
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ─────────────────────────────────────────────────────────

-- 1. Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  message     TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Projects table
CREATE TABLE IF NOT EXISTS projects (
  id          BIGSERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  description TEXT,
  tech        TEXT[],          -- array of tech tags e.g. {'Next.js','Supabase'}
  link        TEXT,            -- live site URL (optional)
  github      TEXT,            -- github URL (optional)
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id          BIGSERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,  -- URL-friendly e.g. 'my-first-post'
  excerpt     TEXT,                  -- short summary shown on blog listing
  content     TEXT,                  -- full HTML content of the post
  published   BOOLEAN DEFAULT FALSE, -- set to TRUE to make it visible
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────────────────
-- Row Level Security (RLS) — allows public read, no public write
-- ─────────────────────────────────────────────────────────

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects         ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts       ENABLE ROW LEVEL SECURITY;

-- Anyone can INSERT a contact message (the contact form)
CREATE POLICY "Allow public contact form insert"
  ON contact_messages FOR INSERT
  TO anon WITH CHECK (true);

-- Anyone can read projects
CREATE POLICY "Allow public read projects"
  ON projects FOR SELECT
  TO anon USING (true);

-- Anyone can read published blog posts
CREATE POLICY "Allow public read published posts"
  ON blog_posts FOR SELECT
  TO anon USING (published = true);

-- ─────────────────────────────────────────────────────────
-- Sample project row (your portfolio itself)
-- ─────────────────────────────────────────────────────────
INSERT INTO projects (title, description, tech, github)
VALUES (
  'This Portfolio Website',
  'My first personal project — a fully deployed dark portfolio with a blog, contact form, and Supabase backend. Built with Next.js, deployed on Vercel.',
  ARRAY['Next.js', 'Supabase', 'Vercel', 'TypeScript'],
  'https://github.com/zelgadis019-afk'
);
