"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98, skewX: 5 }}
        animate={{ opacity: 1, scale: 1, skewX: 0 }}
        exit={{ opacity: 0, scale: 1.02, skewX: -5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow" // Ensure it takes up available space
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
