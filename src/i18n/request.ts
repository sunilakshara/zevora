import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {translations, Locale} from '@/lib/translations';

const locales: Locale[] = ['en', 'fr', 'ar'];

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }

  return {
    locale,
    messages: translations[locale as Locale]
  };
});
