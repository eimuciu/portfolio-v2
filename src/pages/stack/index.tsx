import Layout from '@/app/components/layout';
import { icons } from './data';

export default function Stack() {
  return (
    <Layout>
      <main>
        <section className="font-bold text-5xl mb-[30px]">Tech stack</section>
        <section className="w-[75%] m-auto flex flex-wrap justify-center">
          {icons.map((x, idx) => (
            <div className="w-[25%] p-[20px] flex justify-center" key={idx}>
              {<x.icon className="w-[72px] h-[72px]" />}
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
