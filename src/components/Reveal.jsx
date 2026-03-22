import { motion } from 'framer-motion'

const defaultViewport = { once: true, amount: 0.25 }
const MotionDiv = motion.div

function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  duration = 0.6,
}) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  )
}

export default Reveal
