'use client';

import { useState, useRef } from 'react';
import Layout from '@/app/components/layout';
import { projectList, projects } from './data';
import Image from 'next/image';
import { BsCode, BsGlobe } from 'react-icons/bs';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useOutsideClick } from '@/app/hooks/useOutsideClick';

export default function ProjectsPage() {
  // const [activeProject, setActiveProject] = useState({
  //   name: 'Group Chat',
  //   position: 0,
  // });
  const [activeProject, setActiveProject] = useState<string>('Cash Tracker v2.0');
  const [openProjectList, setOpenProjectList] = useState(false);
  const refEl = useRef<HTMLElement>(null);

  const handleOnProjectClick = (groupName: string) => {
    setActiveProject(groupName);
    setOpenProjectList(false);
  };

  useOutsideClick(
    refEl,
    () => {
      setOpenProjectList(false);
    },
    openProjectList,
  );

  return (
    <Layout>
      <main className="flex gap-x-8">
        <div
          onClick={() => {
            setOpenProjectList(true);
          }}
          className="cursor-pointer text-3xl font-bold hidden md:block md:fixed md:left-[0px] md:top-[65px] text-[#A50104]"
        >
          <FaArrowCircleRight className="w-[20px] h-[20px]" />
        </div>
        <section
          ref={refEl}
          className={`w-[30%] md:${
            openProjectList ? 'fixed' : 'hidden'
          } md:top-0 md:left-0 md:h-[100%] md:z-10 md:bg-[#dee2e2] md:w-[75%]`}
        >
          {Object.keys(projects).map((x) => (
            <div
              key={x}
              onClick={() => {
                handleOnProjectClick(x);
              }}
              className={
                activeProject == x
                  ? 'bg-[#A50104] text-white cursor-pointer text-xl'
                  : 'cursor-pointer text-xl'
              }
            >
              {x}
            </div>
          ))}
        </section>
        <section className="w-[70%] h-[75vh] md:w-[100%]">
          <div className="w-[50%] h-[50%] relative m-auto mb-[30px] md:w-[100%]">
            <Image
              src={projects[activeProject as keyof typeof projects].imageLink}
              alt={`Picture of the ${activeProject}`}
              fill
            />
          </div>
          <div className="text-xl md:text-lg">
            {projects[activeProject as keyof typeof projects].description}
          </div>
          <div className="flex items-center mt-[20px] mb-[5px] text-[#2B303A] text-xl md:text-lg">
            <BsCode className="w-[20px] h-[20px] me-[10px] md:w-[18px] md:h-[18px]" />
            <Link
              href={`${
                projects[activeProject as keyof typeof projects].sourceCode
              }`}
              target="_blank"
              rel="noreferrer"
            >
              Source code
            </Link>
          </div>
          {projects[activeProject as keyof typeof projects].liveVersion && (
            <div className="flex items-center text-[#2B303A] text-xl md:text-lg">
              <BsGlobe className="w-[17px] h-[17px] me-[12px] md:w-[15px] md:h-[15px]" />
              <Link
                href={`${
                  projects[activeProject as keyof typeof projects].liveVersion
                }`}
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
