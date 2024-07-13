import RecentProjects from "@/components/RecentProjects";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section className="bg-black-100">
      <RecentProjects />
    </section>
  );
};

export default Projects;
