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
  
  return {
    title: `Zevora Groupe | ${t('tasteBeyondBorders')}`,
    description: tHero('description'),
    keywords: ["Zevora Groupe", "Indian spice exporters", "cardamom export India", "black pepper exporters", "bulk spice suppliers India", "export logistics"],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
        'ar': '/ar',
      }
    }
  };
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
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
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-secondary/30">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            <SmoothScroll>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
