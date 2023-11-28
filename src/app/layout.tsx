import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Providers } from './providers';

const circularStd = localFont({
  src: [
    {
      path: '../fonts/CircularStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/CircularStd-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/CircularStd-Black.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Budget App',
  description: 'Empower Your Finances: Navigate Every Dollar with Precision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={circularStd.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
