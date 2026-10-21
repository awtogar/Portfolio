import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const writingsDirectory = path.join(process.cwd(), 'src/content/writings');

function getReadingTime(content) {
  const words = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function getWritingFromFile(fileName, includeContent = false) {
  const slug = fileName.replace(/\.mdx$/, '');
  const source = fs.readFileSync(path.join(writingsDirectory, fileName), 'utf8');
  const { data, content } = matter(source);

  return {
    ...data,
    slug,
    readTime: getReadingTime(content),
    ...(includeContent ? { content } : {}),
  };
}

export function getAllWritings({ includeDrafts = false, includeContent = false } = {}) {
  if (!fs.existsSync(writingsDirectory)) return [];

  return fs
    .readdirSync(writingsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => getWritingFromFile(fileName, includeContent))
    .filter(writing => includeDrafts || writing.published !== false)
    .sort((first, second) => new Date(second.date) - new Date(first.date));
}

export function getWritingBySlug(slug) {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(writingsDirectory, fileName);

  if (!fs.existsSync(filePath)) return null;

  const writing = getWritingFromFile(fileName, true);
  return writing.published === false ? null : writing;
}

export function getRelatedWritings(currentSlug, limit = 2) {
  return getAllWritings().filter(writing => writing.slug !== currentSlug).slice(0, limit);
}
