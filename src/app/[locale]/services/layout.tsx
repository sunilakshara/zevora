import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = `Zevora Groupe | ${t('markets')}`;
  const description = 'International trade and export services.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        'en': `/en/services`,
        'fr': `/fr/services`,
        'ar': `/ar/services`,
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/services`,
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
            name: 'Zevora Groupe - services',
            url: `https://zevoragroupe.com/services`
          })
        }}
      />
      {children}
    </>
  );
}
