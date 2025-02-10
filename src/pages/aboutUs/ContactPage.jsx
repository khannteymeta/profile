import { motion } from "framer-motion";
import image from "/logo/meta.png";
import page from "/logo/page.png";

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  return (
    <>
      <div className="">
        <motion.h1
          className="font-bold  flex justify-center align-top text-4xl  text-[#FFB600]  "
          variants={screenLeft}
          initial="hidden"
          animate="visible"
        >
          <img
            src={image}
            alt=""
            className="w-[150px] relative  transform scale-75 rounded-full    "
          />
        </motion.h1>
        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-0 text-[#0E302F]  font-thin">
            About Me
          </h1>
        </motion.h1>
        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            Hi, I’m Meta, a front-end develope and UX/UI designer. I’m
            passionate about creating seamless, user-centered digital
            experiences. My goal is to build products that not only look great
            but also solve real-world problems.
          </h2>
        </div>

        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-5 text-[#0E302F]  font-thin">
            Education
          </h1>
        </motion.h1>
        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
            I’m currently in my third year at Norton University, I have taken
            specialized courses at CSTAD and ANT. Learning and
            Practical courses helps me build strong, real-world projects.
          </h2>
        </div>

        <motion.h1
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-9 text-[#0E302F]  font-thin">
            Content Creator
          </h1>
        </motion.h1>
        <div className="flex justify-center  mt-5">
          <a href="https://www.facebook.com/profile.php?id=61559632608002">
            <img
              src={page}
              alt=""
              className="w-[150px] relative  rounded-xl border-4  "
            />
          </a>
        </div>

        <div className="flex justify-center">
          <h2 className="text-sm text-center w-[300px]  mt-4">
          I’ve recently started my journey as a content creator because I want to explore new ideas and build confidence.  Check out my new page to follow along with my growth and creative projects!
          </h2>
        </div>
      </div>
    </>
  );
}
