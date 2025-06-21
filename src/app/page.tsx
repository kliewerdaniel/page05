"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming a Button component exists

export default function HomePage() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold tracking-widest sm:text-6xl md:text-7xl animate-flicker"
        >
          Daniel Kliewer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          AI Developer • Full-Stack Technologist • System Designer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          I design and build intelligent systems with an emphasis on local-first AI, agentic reasoning, and resilient open-source infrastructure.
          Whether it's an economic insight engine or an AI journaling assistant, I create tools that are transparent, autonomous, and built to last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="pt-8"
        >
          <Link href="/projects" passHref>
            <Button
              className="text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
              />
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 0.5, ease: "linear", delay: 0.25 }}
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
