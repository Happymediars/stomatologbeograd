import { getPageBySlug, getPageSlugs } from '@/lib/getContent';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

/**
 * Generate static params for each Markdown page.  This enables
 * Next.js to pre-render pages at build time.
 */
export async function generateStaticParams() {
  const slugs = getPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate dynamic metadata based on the front matter of the page.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);
  if (!page) return {} as any;
  return {
    title: page.metadata.title || params.slug,
    description: page.metadata.description || '',
  };
}

/**
 * Renders a Markdown page based on the slug.  If no matching page is found
 * a 404 page is returned.
 */
export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const page = await getPageBySlug(slug);
  if (!page) return notFound();
  return (
    <article className="prose mx-auto px-4 py-8">
      <h1>{page.metadata.title}</h1>
      {/* Using dangerouslySetInnerHTML to inject HTML generated from Markdown */}
      <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
    </article>
  );
}
