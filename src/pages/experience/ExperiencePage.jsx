import { motion } from "framer-motion";
const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ExperiencePage() {
  return (
    <>
      <div>
        <motion.h1
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-4 text-[#0E302F]  font-thin">
            CUBETIQ Solution
          </h1>
        </motion.h1>
        <div className="flex justify-center">
          <h2 className="text-[16px] text-center w-[300px]  mt-4">
          During my internship as a UX/UI Designer at CUBETIQS Solution, working on a POS system with a focus on user research, wireframing, and UI design. Gained skills in design, teamwork, and adaptability.
          </h2>
        </div>

        <motion.h1
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl text-center mt-6 text-[#0E302F]  font-thin">
            CSTAD
          </h1>
        </motion.h1>

        <div className="flex justify-center">
          <h2 className="text-[16px] text-center w-[300px]  mt-4">
          Through a scholarship program, I deepened my knowledge in Frontend, Java programming, and UI design, while enhancing my research, communication, time management, and teamwork skills.
          </h2>
        </div>
      </div>
    </>
  );
}
