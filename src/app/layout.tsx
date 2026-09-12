import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rajnandini Patil — Software Engineer | AI, Systems & Problem Solving',
  description:
    'Software engineer building intelligent systems. Experienced in backend engineering, AI/ML, distributed systems, and algorithmic problem solving. B.Tech AI & Data Science, VIT Pune.',
  keywords: [
    'Rajnandini Patil',
    'Software Engineer',
    'AI ML',
    'Backend Engineer',
    'Systems',
    'DSA',
    'Portfolio',
  ],
  authors: [{ name: 'Rajnandini Patil' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rajnandini Patil — Software Engineer',
    description:
      'Software engineer building intelligent systems. AI/ML, backend, systems, and algorithmic problem solving.',
    siteName: 'Rajnandini Patil',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajnandini Patil — Software Engineer',
    description:
      'Software engineer building intelligent systems. AI/ML, backend, systems, and algorithmic problem solving.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-surface text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
