import { motion } from "framer-motion";

import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/home/HeroSection";
import ProblemStatement from "../components/home/ProblemStatement";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";

/* ================================================= */
/* ANIMATION CONFIG */
/* ================================================= */

const sectionAnimation = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
  },

  viewport: {
    once: true,
  },
};

/* ================================================= */
/* HOME PAGE */
/* ================================================= */

export default function Home() {
  return (
    <MainLayout>

      {/* HERO */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <HeroSection />
      </motion.div>

      {/* PROBLEM STATEMENT */}

      <motion.div {...sectionAnimation}>
        <ProblemStatement />
      </motion.div>

      {/* FEATURES */}

      <motion.div {...sectionAnimation}>
        <FeaturesSection />
      </motion.div>

      {/* HOW IT WORKS */}

      <motion.div {...sectionAnimation}>
        <HowItWorks />
      </motion.div>

      {/* TESTIMONIALS */}

      <motion.div {...sectionAnimation}>
        <Testimonials />
      </motion.div>

      {/* CTA */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
      >
        
      </motion.div>

    </MainLayout>
  );
}