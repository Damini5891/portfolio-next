import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mypic from "../../public/images/profile/mypic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faChartLine, faTerminal } from '@fortawesome/free-solid-svg-icons';
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";


const about = () => {
  return (
    <>
      <Head>
        <title> Damini Rai | About Page </title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hello again!👋 <br />I am a Web Developer who loves creating
                applications. Currently doing stuffs on my own, have a look at
                my&nbsp;
                <Link href="https://github.com/Damini5891" target="_blank" className="font-bold">
                  github.&nbsp;
                </Link>
                Also, a part-time gamer at&nbsp;
                <Link
                  href="https://youtube.com/@aceauroraaa?si=wQpcDFeAMm7S07m2"
                  target="_blank"
                  className="font-bold"
                >
                  youtube&nbsp;
                </Link>
                (Do not forget to subscribe 😉). For professional details about
                me find my&nbsp;
                <Link href="/DaminiRai.pdf" target="_blank" className="font-bold">
                  resume&nbsp;
                </Link>
                here.
              </p>
              <p className="my-6 font-medium">
                I believe that design is about more than just making things look
                pretty, it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={mypic}
                alt="Damini"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col justify-between items-center">
              <div className="flex flex-col items-center justify-center">
              <FontAwesomeIcon icon={faTerminal} className="inline-block text-7xl font-bold items-end py-4"/> 
                <h2 className="text-xl capitalize text-dark/75 font-medium dark:text-light/75">Creative <span className="font-bold">Software Developer</span> Innovating Solutions.</h2>
              </div>
              <div className="flex flex-col items-center justify-center py-4" >
              <FontAwesomeIcon icon={faChartLine} className="inline-block text-7xl font-bold items-end py-4"/> 
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75"><span className="font-bold">UI/UX Artisan</span> Designing Seamless Experiences</h2>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <FontAwesomeIcon icon={faPenNib} className="inline-block text-7xl font-bold items-end py-4" /> 
               <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75"><span className="font-bold">Content Writer</span> Crafting Engaging Narratives.</h2>
              </div>
            </div>
          </div>
          
        <Skills/>
        <Experience/>
        <Education/>
        </Layout>
      </main>
    </>
  );
};

export default about;
