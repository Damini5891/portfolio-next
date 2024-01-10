import React from "react";
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
  const [mode, setMode]   = useThemeSwitcher(); 
  const router = useRouter();

  const linkClasses = "text-gray-700 no-underline  dark:text-light";
  const hoverClasses = "hover:border-b-2 border-dark ";
  const activeClasses = "border-b-2 border-dark dark:border-light ";
  const socialClasses = "text-3xl";

  const isLinkActive = (href) => router.pathname === href;

  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between ">
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

      <Logo />

      <nav className="flex items-center gap-4">
        <motion.a
          href="https://github.com/Damini5891"
          target="_blank"
          className={`${socialClasses}`}
          whileHover={{ y: -2 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/the_miniii"
          target="_blank"
          className={`${socialClasses}`}
          whileHover={{ y: -2 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/damini-rai-484772188/"
          target="_blank"
          className={`${socialClasses}`}
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
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }
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
