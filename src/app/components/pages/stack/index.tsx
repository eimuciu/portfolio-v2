import Layout from '@/app/components/layout';
import { iconList } from './data';

export default function StackPage() {
  return (
    <Layout>
      <main>
        <section className="font-bold text-5xl mb-[30px] md:text-4xl">Tech stack</section>
        <section className="w-[75%] m-auto flex flex-wrap justify-center md:w-[100%]">
          {iconList.map((x, i) => (
            <div className="w-[25%] p-[20px] flex justify-center" key={i}>
              {<x.component className="w-[64px] h-[64px] md:w-[40px] md:h-[40px]" />}
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
