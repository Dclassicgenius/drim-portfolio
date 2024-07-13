import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export type FloatingNavProps = SliceComponentProps<Content.FloatingNavSlice>;

const FloatingNav = ({ slice }: FloatingNavProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FloatingNavbar navItems={navItems} />
    </section>
  );
};

export default FloatingNav;
