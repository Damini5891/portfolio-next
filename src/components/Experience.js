import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp; @<span className="text-primary dark:text-primaryDark">{company}</span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium  w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Intern"
            company="Brain Crowd Software Private Limited"
            time="Nov 2022 - Aug 2023"
            address="Bengaluru, Karnataka"
            work="Enhanced user interface and interactivity for Boxxport by developing dynamic static pages using HTML, CSS, Typescript, and AngularJS. Collaborating with the backend team, I integrated Restful APIs for improved functionality. 
          Meticulous manual testing ensured optimal website performance
           and I contributed significantly to content creation and
            documentation for Brain-Crowd Proficient use of
             Git, npm, Bitbucket, and JIRA showcased my strong version control,
              package management, and project tracking skills."
          />
          <Details
            position="Trainee"
            company="DGRE-DRDO"
            time="Jul 2022 - Apr 2023"
            address="Chandigarh"
            work="Developed a streamlined visitor management system at DGRE - DRDO using PHP's CodeIgniter,
             optimizing processes for efficiency. In collaboration on the MIRAJ web app, 
             I implemented responsive design and integrated advanced features like JWT authentication,
              web sockets, and OAuth for secure internal communication and file sharing.
            My focus on seamless user experiences and robust authentication mechanisms
          showcased my expertise in web application development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
