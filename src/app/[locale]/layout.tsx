import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "@/app/globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  // Use next-intl server-side translations for SEO
  const t = await getTranslations({ locale, namespace: 'nav' });
  const tHero = await getTranslations({ locale, namespace: 'hero' });
  
  const title = `Zevora Groupe | ${t('tasteBeyondBorders')}`;
  const description = tHero('description');

  return {
    metadataBase: new URL('https://zevoragroupe.com'),
    title,
    description,
    keywords: ["Zevora Groupe", "Indian spice exporters", "cardamom export India", "black pepper exporters", "bulk spice suppliers India", "export logistics", "premium food export", "Kerala spices"],
    alternates: {
      canonical: `https://zevoragroupe.com/${locale}`,
      languages: {
        'en': 'https://zevoragroupe.com/en',
        'fr': 'https://zevoragroupe.com/fr',
        'ar': 'https://zevoragroupe.com/ar',
      }
    },
    openGraph: {
      title,
      description,
      url: `https://zevoragroupe.com/${locale}`,
      siteName: 'Zevora Groupe',
      images: [
        {
          url: 'https://zevoragroupe.com/opengraph-image.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://zevoragroupe.com/twitter-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SplashScreen from "@/components/ui/SplashScreen";
import { LanguageProvider } from "@/context/LanguageContext";

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await props.params;
  const { children } = props;
  // Fetch messages from next-intl for the current locale
  // Fetch messages from next-intl for the current locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zevora Groupe',
              url: 'https://zevoragroupe.com',
              logo: 'https://zevoragroupe.com/icon.png',
              sameAs: [
                'https://www.facebook.com/share/1YTRQh8sQ7/?mibextid=wwXIfr',
                'https://www.instagram.com/zevora_groupe?igsh=MTU4dzBtdjYyMTM2Zg%3D%3D&utm_source=qr',
                'https://www.linkedin.com/company/zevora-groupe-pvt-ltd/',
                'https://youtube.com/@zevoragroupe_official?si=0sHm5QBaccDiWN5k'
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-secondary/30">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            <SmoothScroll>
              <SplashScreen />
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </SmoothScroll>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
