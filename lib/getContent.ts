import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

/*
 * Helper functions for reading markdown files from the content directory.
 *
 * Pages live in `content/pages` and are written in Markdown with
 * front matter.  Each page exports a `title` and `description` in
 * its front matter.  The body is converted to HTML using Remark.
 */

// The content directory is relative to the project root.  When running
// `next dev` or `next build` the current working directory is the
// repository root (where package.json lives), so we join directly on
// `content/pages`.
const contentDir = path.join(process.cwd(), 'content', 'pages');

/**
 * Return a list of slugs (filenames without extension) for each page
 * in the content directory.  Slugs are used to build static params.
 */
export function getPageSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

/**
 * Read a Markdown file by slug and return its front matter and HTML.
 *
 * @param slug - The filename without `.md` extension
 */
export async function getPageBySlug(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    slug,
    metadata: data as Record<string, any>,
    contentHtml,
  };
}
