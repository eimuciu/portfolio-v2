import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../globals.css';

const inter = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'eimis.codes',
  description: 'Eimantas Danielevicius Portfolio Website',
  keywords: [
    'Eimantas Danielevicius, cv, job, portfolio, frontend, front end, developer, web, website, software, engineer, JavaScript, React, Redux, HTML, CSS',
  ],
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
