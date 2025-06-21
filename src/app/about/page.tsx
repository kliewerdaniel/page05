"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="container py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold"
      >
        About
      </motion.h1>
      <div className="mx-auto max-w-3xl space-y-6 text-lg text-muted-foreground">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          I’m Daniel Kliewer, a software engineer and creative technologist based in Austin, Texas. I work at the intersection of local AI, full-stack development, and systems thinking. I specialize in building tools that are introspective, agentic, and capable of understanding context — not just processing it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My development philosophy is shaped by three principles:
          <br />• Independence over reliance
          <br />• Transparency over black-box abstraction
          <br />• Resilience through simplicity
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm currently focused on building personal knowledge interfaces, economic analysis agents, and infrastructure that supports AI workflows without external dependencies.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-3xl font-bold"
        >
          Skills & Technologies
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="list-disc list-inside space-y-2"
        >
          <li><strong>Languages:</strong> Python, JavaScript, TypeScript, R</li>
          <li><strong>Frameworks:</strong> Next.js, FastAPI, Django, LangChain, Jekyll</li>
          <li><strong>AI & Data:</strong> Ollama, ChromaDB, LangChain, LLaVA, RLHF</li>
          <li><strong>Tools:</strong> Docker, GitHub Actions, Netlify, Tailwind CSS, Framer Motion</li>
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-10 text-3xl font-bold"
        >
          Interests
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="list-disc list-inside space-y-2"
        >
          <li>Local AI & self-hosted models</li>
          <li>Human-aligned system interfaces</li>
          <li>Data annotation infrastructure</li>
          <li>Knowledge graphs & memory structures</li>
          <li>Long-context agents</li>
        </motion.ul>
      </div>
    </section>
  );
}
