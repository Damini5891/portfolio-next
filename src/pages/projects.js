import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tourly from "../../public/images/projects/tourly.png";
import musify from "../../public/images/projects/musify.png";
import dcafe from "../../public/images/projects/dcafe.png";
import learning from "../../public/images/projects/learning.png";
import expense from "../../public/images/projects/expense.png";
import taskmg from "../../public/images/projects/taskmg.png";
import weather from "../../public/images/projects/weather.png";
import portfolio from "../../public/images/projects/portfolio.png";

import { motion } from "framer-motion";


const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid'
     border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4  "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt="title" className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title} </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary} </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
           
            Visit Website
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl
     border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
     xs:p-4 ">
           <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt="title" className="w-full h-auto"
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
           />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl ">{title} </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:underline underline-offset-2 dark:text-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title> Damini Rai | Projects Page </title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gay-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="D-Cafe"
                img={dcafe}
                summary="A showcase of creativity and functionality, brought to life using React and styled with Tailwind CSS simplicity"
                github="https://github.com/Damini5891/d-cafe"
                link="https://spiffy-florentine-cb9488.netlify.app/" 
                target = "_blank"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="Personal Project"
                title="Musify"
                img={musify}
                github="https://github.com/Damini5891/Spotify-clone"
                link="https://clinquant-cendol-116c42.netlify.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal Project"
                title="E-larning Web App"
                img={learning}
                github="https://github.com/Damini5891/e-learning-web-app"
                link="https://github.com/Damini5891/e-learning-web-app"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="React Weather App"
                img={weather}
                summary="Access real-time weather data effortlessly with this web app. 
                Enter any location to instantly view the current temperature, humidity, and wind speed for up-to-the-minute weather details"
                github="https://github.com/Damini5891/weather-app"
                link="https://amazing-eclair-1f4bc7.netlify.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal Project"
                title="Expense tracker"
                img={expense}
                github="https://github.com/Damini5891/expense-tracker"
                link="https://lively-buttercream-5a07e7.netlify.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal Project"
                title="Tourly"
                img={tourly}
                github="https://github.com/Damini5891/tour-travel-website"
                link="https://tourly-two.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal Project"
                title="Real time task management app"
                img={taskmg}
                github="https://github.com/Damini5891/taskmg"
                link="https://github.com/Damini5891/taskmg"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Personal Project"
                title="Portfolio Website"
                img={portfolio}
                github="https://github.com/Damini5891/Damini5891.github.io"
                link="https://damini5891.github.io//"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Tourly"
                img={tourly}
                summary="Tour and Travel App! Powered by HTML, CSS and JavaScript, featuring Bootstrap for a clean design and lively animations."
                github="https://github.com/Damini5891/tour-travel-website"
                link="https://tourly-two.vercel.app/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
