import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zevora Groupe',
    short_name: 'Zevora',
    description: 'Premium Food & Beverage Import & Export Company',
    start_url: '/',
    display: 'standalone',
    background_color: '#04133b',
    theme_color: '#04133b',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
