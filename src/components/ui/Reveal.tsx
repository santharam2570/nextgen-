"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
  none: { x: 0, y: 0 },
};

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  direction?: Direction;
  scale?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  scale = false,
  ...rest
}: RevealProps) {
  const { x, y } = offsets[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale: scale ? 0.92 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
