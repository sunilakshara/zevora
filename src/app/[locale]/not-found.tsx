'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('nav');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
      <h1 className="text-6xl md:text-8xl font-serif text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-secondary text-primary-dark font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-primary transition-colors border border-transparent hover:border-primary"
      >
        Return Home
      </Link>
    </div>
  );
}
