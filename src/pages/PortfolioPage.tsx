import HeroBanner from "@/components/HeroBanner";
import LanguageCard from "@/components/LanguageCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import WorkInProgress from "@/components/WorkInProgress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { languages } from "@/data/languages";
import { projects } from "@/data/projects";

const PortfolioPage = () => {
    return (
        <>
            <HeroBanner />
            <MaxWidthWrapper className="my-16">
                <div className="relative mx-auto text-center flex flex-col items-center">
                    <h2
                        id="career"
                        className="relative leading-snug w-fit tracking-tight text-balance mt-16 mb-8 font-semibold text-gray-900 text-4xl md:text-5xl"
                    >
                        Mon parcours
                    </h2>
                </div>
                <WorkInProgress />
            </MaxWidthWrapper>
            <MaxWidthWrapper className="my-16">
                <div className="relative mx-auto text-center flex flex-col items-center">
                    <h2
                        id="projects"
                        className="relative leading-snug w-fit tracking-tight text-balance mt-16 mb-8 font-semibold text-gray-900 text-4xl md:text-5xl"
                    >
                        Langages et Technologies
                    </h2>
                    <h2 className="relative leading-snug w-fit tracking-wide text-balance mb-8 text-gray-700 text-xl md:text-2xl">
                        Tout ce que j'ai pu pratiquer, triés par ordre de
                        maîtrise.
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-5 items-center md:items-start md:justify-around my-5">
                    {languages.map((language) => (
                        <LanguageCard item={language} />
                    ))}
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="my-16">
                <div className="relative mx-auto text-center flex flex-col items-center">
                    <h2
                        id="projects"
                        className="relative leading-snug w-fit tracking-tight text-balance mt-16 mb-8 font-semibold text-gray-900 text-4xl md:text-5xl"
                    >
                        Projets réalisés
                    </h2>
                    <h2 className="relative leading-snug w-fit tracking-wide text-balance mb-8 text-gray-700 text-xl md:text-2xl">
                        Dans un cadre scolaire, ou personnel: retrouvez ici les
                        tous les projets auxquels j'ai contribué.
                    </h2>
                </div>
                <ScrollArea>
                    <div className="flex flex-row gap-4 my-5">
                        {projects.map((value) => {
                            return <ProjectCard project={value} />;
                        })}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="my-16">
                <div className="relative mx-auto text-center flex flex-col items-center">
                    <h2
                        id="career"
                        className="relative leading-snug w-fit tracking-tight text-balance mt-16 mb-8 font-semibold text-gray-900 text-4xl md:text-5xl"
                    >
                        Me contacter
                    </h2>
                </div>
                <WorkInProgress />
            </MaxWidthWrapper>
            <div className="bg-white h-[150px] border-slate-200 mt-16 border-t-2 flex justify-center items-center">
                <p className="h-fit">Conçu par moi même avec ❤️ et Réact</p>
            </div>
        </>
    );
};

export default PortfolioPage;
