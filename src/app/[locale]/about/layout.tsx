import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = `Zevora Groupe | ${t('about')}`;
  const description = 'Learn about Zevora Groupe.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': `/en/about`,
        'fr': `/fr/about`,
        'ar': `/ar/about`,
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/about`,
    }
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Zevora Groupe - about',
            url: `https://zevoragroupe.com/about`
          })
        }}
      />
      {children}
    </>
  );
}
