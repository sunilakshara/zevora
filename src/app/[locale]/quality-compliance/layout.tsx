import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = `Zevora Groupe | ${t('quality')}`;
  const description = 'Our commitment to quality and compliance.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/quality-compliance`,
      languages: {
        'en': `/en/quality-compliance`,
        'fr': `/fr/quality-compliance`,
        'ar': `/ar/quality-compliance`,
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/quality-compliance`,
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
            name: 'Zevora Groupe - quality-compliance',
            url: `https://zevoragroupe.com/quality-compliance`
          })
        }}
      />
      {children}
    </>
  );
}
