import Layout from '@/app/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <main className="h-[50vh] w-[40%] m-auto flex flex-col items-center justify-center md:w-[100%]">
        <section className="font-bold text-8xl md:text-7xl">Welcome!</section>
        <section className="text-[#A50104] text-2xl mt-[20px] md:text-xl">
          I am a website developer
        </section>
        <section className="w-[100%] bg-[white] text-center text-2xl border border-black mt-[65px] md:text-xl">
          <Link className='inline-block w-[100%] h-[100%] py-[10px]' href="/about" prefetch={false}>
            About me
          </Link>
        </section>
      </main>
    </Layout>
  );
}
