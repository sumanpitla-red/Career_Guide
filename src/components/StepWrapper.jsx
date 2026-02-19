import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

export default function StepWrapper({ children }) {
  return (
    <>
      <AnimatedBackground />
      <motion.div
        className="section"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
