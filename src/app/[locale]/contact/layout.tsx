import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = `Zevora Groupe | ${t('contact')}`;
  const description = 'Get in touch with Zevora Groupe.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'en': `/en/contact`,
        'fr': `/fr/contact`,
        'ar': `/ar/contact`,
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/contact`,
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
            name: 'Zevora Groupe - contact',
            url: `https://zevoragroupe.com/contact`
          })
        }}
      />
      {children}
    </>
  );
}
