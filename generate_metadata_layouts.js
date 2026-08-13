const fs = require('fs');
const path = require('path');

const directories = [
  { name: 'about', titleKey: 'aboutUs', desc: 'Learn about Zevora Groupe.' },
  { name: 'contact', titleKey: 'contact', desc: 'Get in touch with Zevora Groupe.' },
  { name: 'products', titleKey: 'products', desc: 'Explore our premium products.' },
  { name: 'quality-compliance', titleKey: 'quality', desc: 'Our commitment to quality and compliance.' },
  { name: 'services', titleKey: 'services', desc: 'International trade and export services.' },
  { name: 'sustainability', titleKey: 'sustainability', desc: 'Our sustainability practices.' },
  { name: 'why-choose-us', titleKey: 'whyChooseUs', desc: 'Why choose Zevora Groupe for your export needs.' }
];

const basePath = path.join(__dirname, 'src/app/[locale]');

directories.forEach(dir => {
  const dirPath = path.join(basePath, dir.name);
  if (fs.existsSync(dirPath)) {
    const layoutPath = path.join(dirPath, 'layout.tsx');
    
    const content = `import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  const title = \`Zevora Groupe | \${t('${dir.titleKey}')}\`;
  const description = '${dir.desc}';

  return {
    title,
    description,
    alternates: {
      canonical: \`/\${locale}/${dir.name}\`,
      languages: {
        'en': \`/en/${dir.name}\`,
        'fr': \`/fr/${dir.name}\`,
        'ar': \`/ar/${dir.name}\`,
      }
    },
    openGraph: {
      title,
      description,
      url: \`/\${locale}/${dir.name}\`,
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
            name: 'Zevora Groupe - ${dir.name}',
            url: \`https://zevoragroupe.com/${dir.name}\`
          })
        }}
      />
      {children}
    </>
  );
}
`;
    fs.writeFileSync(layoutPath, content);
    console.log(`Generated ${layoutPath}`);
  }
});
