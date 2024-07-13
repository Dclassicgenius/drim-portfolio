"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStack } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={component}>
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
          Stack I Use
        </h2>
      </div>
      {techStack.map(({ name, color }, index) => (
        <div
          key={index}
          className="tech-row flex items-center justify-center gap-4 text-slate-700 mb-auto h-full w-full"
          aria-label={name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item font-sans text-2xl lg:text-3xl font-bold uppercase tracking-tighter"
                }
                style={{
                  color:
                    index === 7 || index === 5 || (index === 9 && color)
                      ? color
                      : "inherit",
                }}
              >
                {name}
              </span>
              <span className="text-base">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechStack;
