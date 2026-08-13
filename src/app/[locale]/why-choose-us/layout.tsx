import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = `Zevora Groupe | ${t('whyUs')}`;
  const description = 'Why choose Zevora Groupe for your export needs.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/why-choose-us`,
      languages: {
        'en': `/en/why-choose-us`,
        'fr': `/fr/why-choose-us`,
        'ar': `/ar/why-choose-us`,
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/why-choose-us`,
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
            name: 'Zevora Groupe - why-choose-us',
            url: `https://zevoragroupe.com/why-choose-us`
          })
        }}
      />
      {children}
    </>
  );
}
