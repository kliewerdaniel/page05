"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="mt-auto border-t bg-background/95 py-6 text-center text-sm text-muted-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
