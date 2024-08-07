import { motion } from "framer-motion";

interface AnimateViewProps {
  children: React.ReactNode;
  direction: "left" | "down" | "up" | "right";
  className?: string;
  transition?: {
    delay?: number;
    duration?: number;
  };
}

export const AnimateView = ({
  children,
  direction,
  className,
  transition = { delay: 0.2, duration: 0.8 },
}: AnimateViewProps) => {
  const initialAnimation = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    down: { y: 50, opacity: 0 },
    up: { y: -50, opacity: 0 },
  }[direction];

  const whileInViewAnimation = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    down: { y: 0, opacity: 1 },
    up: { y: 0, opacity: 1 },
  }[direction];

  return (
    <motion.div
      initial={initialAnimation}
      whileInView={whileInViewAnimation}
      transition={transition}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
