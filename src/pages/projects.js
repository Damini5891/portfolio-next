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
import { motion } from "framer-motion";


const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid'
     border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt="title" className="w-full h-auto"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title} </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary} </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
           <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

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
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title} </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:underline underline-offset-2"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gay-y-32">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="D-Cafe"
                img={dcafe}
                summary="A showcase of creativity and functionality, brought to life using React and styled with Tailwind CSS simplicity"
                github="https://github.com/Damini5891/d-cafe"
                link="https://github.com/Damini5891/d-cafe"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                type="Personal Project"
                title="Musify"
                img={musify}
                github="https://github.com/Damini5891/musi-fy"
                link="https://github.com/Damini5891/musi-fy"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="E-larning Web App"
                img={learning}
                github="https://github.com/Damini5891/e-learning-web-app"
                link="https://github.com/Damini5891/e-learning-web-app"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Real time task management app"
                img={taskmg}
                summary=" Effortlessly manage tasks in real-time with the task manager web app. Stay organized and in control, 
                with admin features for seamless task oversight and efficiency."
                github="https://github.com/Damini5891/taskmg"
                link="https://github.com/Damini5891/taskmg"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Personal Project"
                title="Expense tracker"
                img={expense}
                github="https://github.com/Damini5891/expense-tracker"
                link="https://github.com/Damini5891/expense-tracker"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Personal Project"
                title="Tourly"
                img={tourly}
                github="https://github.com/Damini5891/tour-travel-website"
                link="https://github.com/Damini5891/tour-travel-website"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
