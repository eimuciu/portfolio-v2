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
  const [openProjectList, setOpenProjectList] = useState(false);

  const handleOnProjectClick = (groupName: string, pos: number) => {
    setActiveProject((prev) => ({ ...prev, name: groupName, position: pos }));
    setOpenProjectList(false);
  };

  return (
    <Layout>
      <main className="flex gap-x-8">
        <div
          onClick={() => {
            setOpenProjectList(true);
          }}
          className="cursor-pointer text-3xl font-bold hidden md:block md:fixed md:left-[2px] md:top-[115px] text-[#A50104]"
        >
          {'>'}
        </div>
        <section
          className={`w-[30%] md:${
            openProjectList ? 'fixed' : 'hidden'
          } md:top-0 md:left-0 md:h-[100%] md:z-10 md:bg-[#dee2e2] md:w-[75%]`}
        >
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
        <section className="w-[70%] h-[75vh] md:w-[100%]">
          <div className="w-[50%] h-[50%] relative m-auto mb-[30px] md:w-[100%]">
            <Image
              src={projectList[activeProject.position].imageLink}
              alt={`Picture of the ${
                projectList[activeProject.position].header
              }`}
              fill
            />
          </div>
          <div className="text-xl md:text-lg">
            {projectList[activeProject.position].description}
          </div>
          <div className="flex items-center mt-[20px] mb-[5px] text-[#2B303A] text-xl md:text-lg">
            <BsCode className="w-[20px] h-[20px] me-[10px] md:w-[18px] md:h-[18px]" />
            <Link
              href={`${projectList[activeProject.position].sourceCode}`}
              target="_blank"
              rel="noreferrer"
            >
              Source code
            </Link>
          </div>
          {projectList[activeProject.position].liveVersion && (
            <div className="flex items-center text-[#2B303A] text-xl md:text-lg">
              <BsGlobe className="w-[17px] h-[17px] me-[12px] md:w-[15px] md:h-[15px]" />
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
