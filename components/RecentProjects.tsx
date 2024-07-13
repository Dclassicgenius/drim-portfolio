"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 px-4">
      <h1 className="heading px-4">
        Selection of Some <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 lg:gap-y-24 mt-32">
        {projects.map((item) => (
          <div
            className="sm:h-[36rem] h-[32rem] lg:min-h-[32.5rem]flex items-center justify-center sm:w-[570px] "
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[30vh] h-[25vh]  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-full w-full object-fill"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-base line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black  w-7 h-7 lg:w-8 lg:h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center text-[#CBACF9]  hover:text-white">
                    <Link
                      target="_blank"
                      href={item.github}
                      className="flex lg:text-xl md:text-xs text-sm"
                    >
                      GitHub
                    </Link>
                    <FaGithub className="ms-1 " />
                  </div>
                  <div className="flex justify-center items-center text-[#CBACF9]  hover:text-white">
                    <Link
                      target="_blank"
                      href={item.link}
                      className="flex lg:text-xl md:text-xs text-sm"
                    >
                      Live Site
                    </Link>
                    <FaLocationArrow className="ms-1" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
