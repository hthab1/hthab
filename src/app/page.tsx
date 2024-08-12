"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Screen from "@/components/Screen";
import Socials from "@/components/Socials";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import { useEffect, useRef, useState } from "react";

interface IntersectionObserverEntry {
  isIntersecting: boolean;
  target: Element;
  rootBounds?: DOMRectReadOnly | null;
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  time: number;
}

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>("about");
  const [aboutInView, setAboutInView] = useState<boolean>(false);
  const [projectInView, setProjectInView] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = aboutRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top > -300) {
          setSelected("about");
          if (!aboutInView) {
            setAboutInView(true);
          }
        } else {
          if (aboutInView) {
            setAboutInView(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelected, setAboutInView, aboutInView]);

  useEffect(() => {
    const handleScroll = () => {
      const element = experienceRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < 300 && !aboutInView && !projectInView) {
          setSelected("experience");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelected, aboutInView, projectInView]);

  useEffect(() => {
    const handleScroll = () => {
      const element = projectsRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < 300) {
          setSelected("projects");
          if (!projectInView) {
            setProjectInView(true);
          }
        } else {
          if (projectInView) {
            setProjectInView(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelected, setProjectInView, projectInView]);

  const handleSelect = (selectedTab: string) => {
    setSelected(selectedTab);
    switch (selectedTab) {
      case "about":
        if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        return;
      case "experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      default:
        return;
    }
  };

  return (
    <Screen>
      <div className="flex relative flex-row w-full">
        <div className="flex w-1/2 sticky flex-col top-0 h-screen py-24">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/" data-ninja-font="inter_bold_normal" className="">
              Habteweld Yimer
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Front-End Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-base">
            I specialize in pixel perfect front end development, backed by
            strong full-stack capabilities
          </p>
          <Navbar selected={selected} setSelected={handleSelect} />
          <Socials />
        </div>
        <div className="flex w-1/2 py-24">
          <div className="flex flex-col w-full ">
            <div ref={aboutRef}></div>
            <AboutSection />
            <div ref={experienceRef}></div>
            <ExperienceSection />
            <div ref={projectsRef}></div>
            <ProjectsSection />
            <Footer />
          </div>
        </div>
      </div>
    </Screen>
  );
}
