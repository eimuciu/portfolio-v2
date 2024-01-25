import Layout from '@/app/components/layout';
import { iconList } from './data';

export default function Stack() {
  return (
    <Layout>
      <main>
        <section className="font-bold text-5xl mb-[30px]">Tech stack</section>
        <section className="w-[75%] m-auto flex flex-wrap justify-center">
          {iconList.map((x, i) => (
            <div className="w-[25%] p-[20px] flex justify-center" key={i}>
              {<x.component className="w-[64px] h-[64px]" />}
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
