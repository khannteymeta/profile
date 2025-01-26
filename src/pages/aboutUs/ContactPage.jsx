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
          Hi, I’m <b> META</b> a UX/UI designer and front-end developer, building responsive and user-friendly for web applications. <br /> My portfolio showcases a range of projects. 
          
              Currently, I’m focused on UX Research and am open to new opportunities where I can contribute to impactful projects. 
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
          Nowaday I'm Study At Norton Univerity
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
            I`m currently start with it because I want to explore and make
            confidance infront of Camera and Ordience. Here is my new page
          </h2>
        </div>

        
      </div>
    </>
  );
}
