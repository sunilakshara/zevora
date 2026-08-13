import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = `Zevora Groupe | ${t('products')}`;
  const description = 'Explore our premium products.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/products`,
      languages: {
        'en': `/en/products`,
        'fr': `/fr/products`,
        'ar': `/ar/products`,
      }
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/products`,
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
            name: 'Zevora Groupe - products',
            url: `https://zevoragroupe.com/products`
          })
        }}
      />
      {children}
    </>
  );
}
