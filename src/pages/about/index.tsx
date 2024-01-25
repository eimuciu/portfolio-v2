import Layout from '@/app/components/layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <main className="flex">
        <section className="w-[50%]">
          <div className="font-bold text-5xl mb-[30px]">About me</div>
          <div className="text-xl">
            Hi. I am a self taught fullstack web developer with a background in
            sales, customer service and recruitment who speaks JavaScript programming language. Most
            frontend and backend projects are built with JavaScript and some are
            with ASP.NET. My focus is micro-frontends and isolated components. I
            have built some projects that came out of my own interest in web
            development and limitations of a commercial software which led to
            manage and solve it by building my own software. I have put all of
            the projects and skills acquired in navigation pages. A constant
            update of knowledge of technologies is something that I live by. I
            love sports, nature and music. Code with Passion, Dream with Vision.
          </div>
        </section>
        <section className="w-[50%] h-[75vh] relative">
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
