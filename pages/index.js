import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Typed from 'typed.js';
import React from 'react';

// Local Data
import data from "../data";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const el = React.useRef(null);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['domi', 'Domenico Valentino', 'a Web Developper', 'a Software Developper', 'a Student', 'a Robotics Enthusiast', 'a Canadian'],
      typeSpeed: 75,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mob:mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
                Hi there 
                <span className="waving-hand">👋</span>
            </h1>
            <h1
              ref={textTwo}
              className="text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
              I&apos;m <span ref={el} />
            </h1>
          </div>

          <Socials className="mt-5 mob:mt-2 laptop:mt-5" />
        </div>
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>
          <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
            {data.projects.map((project, index) => (
              <WorkCard
                key={index}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div
          className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
          ref={aboutRef}>
          <h1 className="text-2xl text-bold">About.</h1>
          <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
