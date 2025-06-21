"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

// Top community-highlighted repos by stars (sorted)
const projects = [
  {
    id: 1,
    name: "PersonaGen",
    description:
      "Open‑source tool to generate rich, archetypal personas via AI templates (Python/TypeScript).",
    githubUrl: "https://github.com/kliewerdaniel/PersonaGen",
  },
  {
    id: 2,
    name: "Tech Company Orchestrator",
    description:
      "Directed‑graph agent system simulating product, design, and engineering workflows using OpenAI & NetworkX.",
    githubUrl: "https://github.com/kliewerdaniel/tech-company-orchestrator",
  },
  {
    id: 3,
    name: "RedDiss",
    description:
      "Streamlit app that crafts AI‑generated diss tracks from Reddit posts, with lyric generation and TTS.",
    githubUrl: "https://github.com/kliewerdaniel/RedDiss",
  },
  {
    id: 4,
    name: "GhostWriter",
    description:
      "AI‑writing assistant (Django + React) for idea generation, editing, and SEO optimization.",
    githubUrl: "https://github.com/kliewerdaniel/GhostWriter",
  },
  {
    id: 5,
    name: "Chrome AI Filename Generator",
    description:
      "Browser script that auto‑generates context‑aware filenames for downloads using LLM analysis.",
    githubUrl: "https://github.com/kliewerdaniel/chrome-ai-filename-generator",
  },
  {
    id: 6,
    name: "Structured AI Workflow Guide",
    description:
      "Markdown-based guide with reproducible best practices for AI-assisted development pipelines.",
    githubUrl: "https://github.com/kliewerdaniel/workflow",
  },
  {
    id: 7,
    name: "Objective Newsfeed (news17)",
    description:
      "Infinite news broadcast generator: scrapes RSS, summarizes, clusters, and reads a continuous AI‑curated feed via TTS.",
    githubUrl: "https://github.com/kliewerdaniel/news17", // Verified
  },
  {
    id: 8,
    name: "Persona Annotation Platform",
    description:
      "TypeScript-based platform for human-in-the-loop labeling and persona creation for fine-tuning models.",
    githubUrl: "https://github.com/kliewerdaniel/persona-annotation-platform",
  },
  {
    id: 9,
    name: "Next.js Blog Scaffold (gblog)",
    description:
      "JAMstack-ready Next.js blog starter template for markdown publishing and static site generation.",
    githubUrl: "https://github.com/kliewerdaniel/gblog",
  }
];
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <section className="container py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold tracking-widest animate-flicker"
      >
        Projects
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline relative overflow-hidden group"
                >
                  <span className="relative z-10">View on GitHub</span>
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      ease: "linear",
                    }}
                  />
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      ease: "linear",
                      delay: 0.25,
                    }}
                  />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}