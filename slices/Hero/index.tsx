"use client";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";
import { useEffect, useRef } from "react";
import Bounded from "@/components/Bounded";
import { Shapes } from "./Shapes";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
        .fromTo(
          ".job-title",
          { y: 20, opacity: 0, scale: 1.2 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          }
        );
    }, [component]);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: KeyTextField, key: string) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="relative h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        ref={component}
      >
        <div className="relative z-10">
          <div className="grid min-h-[50vh] grid-cols-1 items-center md:grid-cols-2">
            <Shapes />

            <div className="col-start-1 md:row-start-1" data-speed=".2">
              <h1
                className="mb-8 text-[clamp(3rem,12vmin,12rem)] font-extrabold leading-none tracking-tighter"
                aria-label={
                  slice.primary.first_name + " " + slice.primary.last_name
                }
              >
                <span className="block text-slate-300 ">
                  {renderLetters(slice.primary.first_name, "first")}
                </span>
                <span className="-mt-[.2em] block text-slate-500  ">
                  {renderLetters(slice.primary.last_name, "last")}
                </span>
              </h1>
              <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
                {slice.primary.tag_line}
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[400px]">
                Building dynamic web applications with React and Next.js
              </p>

              <TextGenerateEffect
                words="Turning Concepts and Ideas into Smooth User Experiences"
                className="text-center text-[36px] md:text-4xl lg:text-5xl"
              />

              <a href="#projects">
                <MagicButton
                  title="See some of my works"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="hover:text-purple hover:scale-105 hover:px-5"
                />
              </a>
            </div>
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default Hero;
