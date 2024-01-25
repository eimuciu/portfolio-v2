import Layout from '@/app/components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <main className="h-[70%] w-[40%] m-auto flex flex-col items-center justify-center">
        <section className="font-bold text-8xl">Welcome!</section>
        <section className="text-[#A50104] text-2xl mt-[20px]">
          I am a website developer
        </section>
        <section className="w-[100%] bg-[white] text-center text-2xl border border-black mt-[65px]">
          <Link className='inline-block w-[100%] h-[100%] py-[10px]' href="/about" prefetch={false}>
            About me
          </Link>
        </section>
      </main>
    </Layout>
  );
}
