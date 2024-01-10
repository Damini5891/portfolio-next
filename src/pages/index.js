import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import headerpic from "../../public/images/profile/headerpic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={headerpic} alt="Damini" className="rounded" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design"
                className="!text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="/DaminiRai.pdf" target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                font-semibold hover:text-dark hover:bg-light border-2 border-solid border-r-transparent
                 hover:border-black dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light">
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="/" className="ml-4 text-lg font-medium capitalize text-black underline dark:text-light">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
