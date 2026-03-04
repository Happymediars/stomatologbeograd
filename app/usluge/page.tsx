import { getPageBySlug } from '@/lib/getContent';
import type { Metadata } from 'next';

/**
 * Usluge page fetches its content from the markdown file with the slug
 * `usluge`.  When editing in the CMS the file is located at
 * `content/pages/usluge.md`.
 */
export default async function UslugePage() {
  const page = await getPageBySlug('usluge');
  if (!page) {
    return <div className="p-4">Nije prona\u0111ena stranica za usluge.</div>;
  }
  return (
    <article className="prose mx-auto px-4 py-8">
      <h1>{page.metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
    </article>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('usluge');
  return {
    title: page?.metadata.title || 'Usluge',
    description: page?.metadata.description || '',
  };
}
