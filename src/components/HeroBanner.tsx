import { ChevronsDown } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ScrollToElement from "./ScrollToElement";

const HeroBanner = () => {
  return (
    <MaxWidthWrapper className="relative h-screen flex flex-col items-center justify-center">
      <div className="relative mx-auto text-center flex flex-col items-center">
        <h2 className="relative leading-snug w-fit tracking-widest text-balance mt-16 text-gray-700 text-2xl md:text-3xl">
          Bonjour 👋, je suis
        </h2>
        <h2 className="relative leading-snug w-fit tracking-tight text-balance font-bold text-gray-900 text-6xl md:text-7xl">
          Jérémy Boureux
        </h2>
        <h2 className="relative leading-snug w-fit text-balance mt-8 text-gray-700 text-3xl md:text-4xl">
          Tech Lead & Développeur web
        </h2>
      </div>

      <ScrollToElement
        targetId="career"
        className="group w-[350px] flex flex-col items-center justify-center absolute md:bottom-14 max-md:top-14"
      >
        <p className="h-fit text-center text-gray-900 text-xl md:text-2xl tracking-normal transition-all ease-in-out group-hover:tracking-widest transform group-hover:scale-110 duration-500">
          Voir mon portfolio
        </p>

        <ChevronsDown
          className="w-10 h-10 transform transition-all ease-in-out duration-500 group-hover:scale-110"
          strokeWidth={1}
        />
      </ScrollToElement>
    </MaxWidthWrapper>
  );
};

export default HeroBanner;
