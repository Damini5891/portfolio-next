import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import jscomp from "../../public/images/projects/jscomp.png";
import gamed from "../../public/images/projects/gamed.jpg";
import { motion, useMotionValue } from "framer-motion";
import aiimage from "../../public/images/projects/aiimage.jpg";
import python from "../../public/images/projects/python.webp";
import datamining from "../../public/images/projects/datamining.jpg";
import dsa from "../../public/images/projects/dsa.jpg";
import reactcomp from "../../public/images/projects/reactcomp.jpg";
import ecom from "../../public/images/projects/ecom.webp";






const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{
          duration:0.2
        }}}
        ref={imgRef}
        src={img}
        alt={title}
        className=" z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitaliza text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{
      duration:0.5, ease:"easeInOut"
    }}}
    viewport={{once:true}}


      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title> Damini Rai | Article Page </title>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words can change the World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl " />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="React vs Vue vs Angular"
              summary="A Comprehensive Comparison of React.js, Angular.js and Vue.js"
              time="5 min Read"
              link="/"
              img={jscomp}
            />

            <FeaturedArticle
              title="Game Development"
              summary="The Art and Science of Game Designing and Development"
              time="5 min Read"
              link="/"
              img={gamed}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="The Unprecedented Growth of Artificial Intelligence in Today\'s World"
              img={aiimage}
              date="November, 17 2023"
              link="/"
            />
            <Article
              title="Python: The Unrivaled Programming Language for the Modern Era "
              img={python}
              date="November, 17 2023"
              link="/"
            />
            <Article
              title="Unveiling Insights: The World of Data Mining"
              img={datamining}
              date="November, 17 2023"
              link="/"
            />
            <Article
              title="The Crucial Role of Data Structures and Algorithms in Landing Your Dream Job."
              img={dsa}
              date="November, 29 2023"
              link="/"
            />
            <Article
              title="Demystifying React Components for Data Visualization"
              img={reactcomp}
              date="December, 29 2023"
              link="/"
            />
              <Article
              title="Clothing-Accessories App powered with Angular, Node.js and MySQL"
              img={ecom}
              date="November, 4 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
