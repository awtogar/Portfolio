
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_DIR = path.join(process.cwd(), 'src/data/blogs');

export function getAllBlogs() {
  return fs
    .readdirSync(BLOGS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const raw = fs.readFileSync(path.join(BLOGS_DIR, f), 'utf8');
      const { data, content } = matter(raw);
      const words = content.trim().split(/\s+/).length;
      const readingTime = Math.max(1, Math.round(words / 200));
      return { ...data, readingTime };
    })
    .sort((a, b) => new Date(b.created) - new Date(a.created));
}

export function getBlogBySlug(slug) {
  const files = fs.readdirSync(BLOGS_DIR).filter(f => f.endsWith('.mdx'));

  for (const f of files) {
    const raw = fs.readFileSync(path.join(BLOGS_DIR, f), 'utf8');
    const { data, content } = matter(raw);
    if (data.slug === slug) return { data, content };
  }

  return null;
}
