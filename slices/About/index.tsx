"use client";
import Bounded from "@/components/Bounded";
import Grid from "@/components/Grid";
import MagicButton from "@/components/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Spotlight } from "@/components/ui/Spotlight";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { FaLocationArrow } from "react-icons/fa";

export type AboutProps = SliceComponentProps<Content.AboutSlice>;

const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-black-100"
    >
      <Grid />
    </Bounded>
  );
};

export default About;
