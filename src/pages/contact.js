import React from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkArrow,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/Icons";

const socialClasses = "text-3xl";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-light">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-light font-medium">
            Connect and let us start a conversation that matters.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            action="https://formspree.io/f/mbjvozrn"
            method="POST"
            className="flex flex-wrap -m-2 justify-center items-center"
          >
            <div className="p-2 w-1/3 sm:w-full ">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-dark dark:text-light"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-100 dark:bg-light bg-opacity-50 rounded border border-dark dark:border-light focus:border-dark/50 focus:bg-light focus:ring-2 focus:ring-dark dark:focus:ring-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/3 sm:w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-dark dark:text-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-100 dark:bg-light bg-opacity-50 rounded border border-dark dark:border-light focus:border-dark focus:bg-white focus:ring-2 dark:focus:ring-light focus:ring-dark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-2/3 sm:w-full ">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-dark dark:text-light"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full bg-gray-100 dark:bg-light bg-opacity-50 rounded border border-dark dark:border-light focus:border-dark focus:bg-white focus:ring-2 focus:ring-dark dark:focus:ring-light h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto dark:text-dark dark:bg-light text-dark border border-dark bg-light hover:bg-dark hover:text-light dark:hover:border-light  py-2 px-8 focus:outline-none hover:bg-primary-dark rounded text-lg"
                type="submit"
              >
                Send Message ↗️
              </button>
            </div>
          </form>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-primary dark:text-primaryDark font-semibold">
              📧 raidamini2010@gmail.com 📞8006163018
            </a>
            <p className="leading-normal my-5 text-dark dark:text-light">
              HSR Layout
              <br />
              Bengaluru, Karnataka
            </p>
            <span className="flex justify-center items-center gap-4">
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
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
