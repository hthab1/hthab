import Navbar from "@/components/Navbar";
import Screen from "@/components/Screen";
import Socials from "@/components/Socials";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";

export default function Home() {
  return (
    <Screen>
      <div className="flex relative flex-row w-full">
        <div className="flex w-1/2 sticky flex-col top-0 h-screen py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/" data-ninja-font="inter_bold_normal" className="">
              Brittany Chiang
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Senior Frontend Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-base">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <Navbar />
          <Socials />
        </div>
        <div className="flex w-1/2 py-24">
          <div className="flex flex-col w-full ">
            <AboutSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </Screen>
  );
}
