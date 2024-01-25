import { useState } from 'react';
import Layout from '@/app/components/layout';
import { projectList } from './data';
import Image from 'next/image';
import { BsCode, BsGlobe } from 'react-icons/bs';
import Link from 'next/link';

export default function Projects() {
  const [activeProject, setActiveProject] = useState({
    name: 'Group Chat',
    position: 0,
  });

  const handleOnProjectClick = (groupName: string, pos: number) => {
    setActiveProject((prev) => ({ ...prev, name: groupName, position: pos }));
  };

  return (
    <Layout>
      <main className="flex gap-x-8">
        <section className="w-[30%]">
          {projectList.map((x, i) => (
            <div
              key={i}
              onClick={() => {
                handleOnProjectClick(x.header, i);
              }}
              className={
                activeProject.name == x.header
                  ? 'bg-[#A50104] text-white cursor-pointer text-xl'
                  : 'cursor-pointer text-xl'
              }
            >
              {x.header}
            </div>
          ))}
        </section>
        <section className="w-[70%] h-[75vh]">
          <div className="w-[50%] h-[50%] relative m-auto mb-[30px]">
            <Image
              src={projectList[activeProject.position].imageLink}
              alt={`Picture of the ${
                projectList[activeProject.position].header
              }`}
              fill
            />
          </div>
          <div className="text-xl">
            {projectList[activeProject.position].description}
          </div>
          <div className="flex items-center mt-[20px] mb-[5px] text-[#2B303A] text-xl">
            <BsCode className="w-[20px] h-[20px] me-[10px]" />
            <Link
              href={`${projectList[activeProject.position].sourceCode}`}
              target="_blank"
              rel="noreferrer"
            >
              Source code
            </Link>
          </div>
          {projectList[activeProject.position].liveVersion && (
            <div className="flex items-center text-[#2B303A] text-xl">
              <BsGlobe className="w-[17px] h-[17px] me-[12px]" />
              <Link
                href={`${projectList[activeProject.position].liveVersion}`}
                target="_blank"
                rel="noreferrer"
              >
                Live version
              </Link>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
