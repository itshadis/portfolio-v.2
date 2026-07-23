import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../App.scss';

const rajdhani = localFont({
  src: [
    {
      path: '../utils/font/Rajdhani-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../utils/font/Rajdhani-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../utils/font/Rajdhani-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../utils/font/Rajdhani-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../utils/font/Rajdhani-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Hadis - Software Developer',
  description: 'Portfolio of Hadis, a Software Developer based in Tangerang, Indonesia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <body>{children}</body>
    </html>
  );
}
