'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
      <h1 className="text-4xl md:text-6xl font-serif text-primary mb-4">Something went wrong!</h1>
      <p className="text-gray-500 mb-8 max-w-md">
        An unexpected error has occurred. Our team has been notified.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-secondary text-primary-dark font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-primary transition-colors border border-transparent hover:border-primary"
      >
        Try again
      </button>
    </div>
  );
}
