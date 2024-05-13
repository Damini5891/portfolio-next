import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  const router = useRouter();

  const linkClasses = "text-gray-700 no-underline dark:text-light";
  const mobileLinkClasses =
    "text-gray-700 no-underline text-light dark:text-dark mb-2";
  const hoverClasses = "hover:border-b-2 border-dark ";
  const hoverMobileClasses = "hover:border-b-2 border-light dark:border-dark ";

  const activeClasses = "border-b-2 border-dark dark:border-light ";
  const socialClasses = "text-3xl";
  const socialMobileClasses = "text-xl";

  const isLinkActive = (href) => router.pathname === href;

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 ">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className={`${linkClasses} ${
              isLinkActive("/") ? activeClasses : ""
            } ${hoverClasses}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${linkClasses} ${
              isLinkActive("/about") ? activeClasses : ""
            } ${hoverClasses}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`${linkClasses} ${
              isLinkActive("/projects") ? activeClasses : ""
            } ${hoverClasses}`}
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className={`${linkClasses} ${
              isLinkActive("/articles") ? activeClasses : ""
            } ${hoverClasses}`}
          >
            Articles
          </Link>
        </nav>
      </div>

      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  z-30
  bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 text-light dark:text-dark
  "
        >
          <nav className="flex items-center flex-col justify-center">
            <Link
              href="/"
              className={`${mobileLinkClasses} ${
                isLinkActive("/") ? activeClasses : ""
              } ${hoverMobileClasses}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${mobileLinkClasses} ${
                isLinkActive("/about") ? activeClasses : ""
              } ${hoverMobileClasses}`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`${mobileLinkClasses} ${
                isLinkActive("/projects") ? activeClasses : ""
              } ${hoverMobileClasses}`}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link
              href="/articles"
              className={`${mobileLinkClasses} ${
                isLinkActive("/articles") ? activeClasses : ""
              } ${hoverMobileClasses}`}
              onClick={handleLinkClick}
            >
              Articles
            </Link>
          </nav>

          <nav className="flex items-center gap-4 ">
            <motion.a
              href="https://github.com/Damini5891"
              target="_blank"
              className={`${socialMobileClasses}`}
              whileHover={{ y: -2 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/DaminiRai11"
              target="_blank"
              className={`${socialMobileClasses}`}
              whileHover={{ y: -2 }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/damini-rai-484772188/"
              target="_blank"
              className={`${socialMobileClasses} `}
              whileHover={{ y: -2 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCnxIPGVshPUun-Ou61m3GLg"
              target="_blank"
              className={`${socialMobileClasses}`}
              whileHover={{ y: -2 }}
            >
              <YoutubeIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} 

          `}
            >
              {mode === "dark" ? (
                <SunIcon className={"flii-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="flex items-center gap-4 lg:hidden">
        <motion.a
          href="https://github.com/Damini5891"
          target="_blank"
          className={`${socialClasses}`}
          whileHover={{ y: -2 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/DaminiRai11"
          target="_blank"
          className={`${socialClasses}`}
          whileHover={{ y: -2 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/damini-rai-484772188/"
          target="_blank"
          className={`${socialClasses} `}
          whileHover={{ y: -2 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/channel/UCnxIPGVshPUun-Ou61m3GLg"
          target="_blank"
          className={`${socialClasses}`}
          whileHover={{ y: -2 }}
        >
          <YoutubeIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
        >
          {mode === "dark" ? (
            <SunIcon className={"flii-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
