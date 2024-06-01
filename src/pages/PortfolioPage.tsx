import HeroBanner from "@/components/HeroBanner";
import LanguageCard from "@/components/LanguageCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import WorkInProgress from "@/components/WorkInProgress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { languages } from "@/data/languages";
import { projects } from "@/data/projects";
import { FileDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

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
                        id="links"
                        className="relative leading-snug w-fit tracking-tight text-balance mt-16 mb-8 font-semibold text-gray-900 text-4xl md:text-5xl"
                    >
                        Mes liens
                    </h2>
                    <h2 className="relative leading-snug w-fit tracking-wide text-balance mb-8 text-gray-700 text-xl md:text-2xl">
                        Tu as une idée et tu as besoin d'un développeur web ?
                        N'hésites pas à prendre contacte avec moi tous mes liens
                        sont là !
                    </h2>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <Card className="w-fit">
                        <CardContent className="p-5 flex flex-row gap-5 w-fit justify-center items-center">
                            <a
                                href="https://cloud-cdn.jboureux.fr/portfolio/CV+Alternance+2024+v2.pdf"
                                target="_blank"
                            >
                                <Button>
                                    <FileDownIcon className="mr-2 w-5 h-5" />
                                    <span>Voir mon CV</span>
                                </Button>
                            </a>
                            <a
                                href="mailto:jeremyboureux@gmail.com"
                                target="_blank"
                                className="bg-primary rounded-full p-2"
                            >
                                <MailIcon className="stroke-primary-foreground w-6 h-6" />
                            </a>

                            <a
                                href="https://linkedin.com/in/jboureux"
                                target="_blank"
                                className="bg-primary rounded-full p-2"
                            >
                                <LinkedinIcon className="stroke-primary-foreground w-6 h-6" />
                            </a>

                            <a
                                href="https://github.com/jboureux"
                                target="_blank"
                                className="bg-primary rounded-full p-2"
                            >
                                <GithubIcon className="stroke-primary-foreground w-6 h-6" />
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </MaxWidthWrapper>
            <div className="bg-white h-[150px] border-slate-200 mt-16 border-t-2 flex justify-center items-center">
                <p className="h-fit">Conçu par moi même avec ❤️ et React</p>
            </div>
        </>
    );
};

export default PortfolioPage;
