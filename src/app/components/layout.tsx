// import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import NavBar from './navbar';

const inter = JetBrains_Mono({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Eimantas Danielevicius',
//   description: 'Eimantas Danielevicius Portfolio Website Version 2.0',
//   icons: {
//     icon: '/icon.png',
//   },
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={inter.className + ' h-svh'}>
        <NavBar />
        <section className='py-[50px] w-[85%] m-auto'>
        {children}
        </section>
      </main>
    </>
  );
}
