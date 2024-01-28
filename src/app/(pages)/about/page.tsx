import Layout from '@/app/components/layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <section className="hidden w-[100%] font-bold text-5xl mb-[30px] md:text-4xl md:block">
        About me
      </section>
      <main className="flex md:flex-col">
        <section className="w-[50%] md:w-[100%]">
          <section className="w-[100%] font-bold text-5xl mb-[30px] md:text-4xl md:hidden">
            About me
          </section>
          <div className="text-xl md:text-lg">
            Hi. I am a self taught fullstack web developer with a background in
            sales, customer service and recruitment who speaks JavaScript
            programming language. Most frontend and backend projects are built
            with JavaScript and some are with C# ASP.NET. My focus is
            micro-frontends and isolated components. I have built some projects
            that came out of my passion in web development and limitations of a
            commercial software which led to manage and solve it by writing my
            own programs. I have put all of the projects and skills acquired in
            navigation pages. I take coding as a hobby, however I am expecting
            to have a real work one day. A constant update of a knowledge of
            technologies is something that I live by. I love sports, nature and
            music. Code with Passion, Dream with Vision.
          </div>
        </section>
        <section className="w-[50%] h-[75vh] relative md:w-[100%]">
          <Image
            src="/me.jpg"
            alt="Picture of the author"
            fill
            style={{ objectFit: 'contain' }}
          />
        </section>
      </main>
    </Layout>
  );
}
