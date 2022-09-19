// this is for animation
import { motion } from "framer-motion"

function Illustration() {
  const variants = {
    visible: { translateY: 0, opacity: 1 },
    hidden: { translateY: 50, opacity: 0 },
  }
  return (
    <div className="illustration">
      <motion.h1 initial="hidden" animate="visible" variants={variants}>
        Discover the world’s top developers and artists.
      </motion.h1>
      <motion.img
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.25 }}
        src="/images/registration_illustration.png"
        alt="working woman illustration"
      />
    </div>
  )
}

export default Illustration
