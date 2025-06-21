"use client";

import { MDXRemote } from 'next-mdx-remote'; // Correct import for client components
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PostData } from '../lib/posts';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

// Custom components for MDX rendering
const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground tracking-widest animate-flicker" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-semibold mt-6 mb-3 text-foreground tracking-widest animate-flicker" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold mt-5 mb-2 text-foreground tracking-widest animate-flicker" {...props} />,
  p: (props: any) => <p className="mb-4 text-lg leading-relaxed text-foreground/80" {...props} />,
  a: (props: any) => <a className="text-accent hover:underline relative overflow-hidden group" {...props}>
    <span className="relative z-10">{props.children}</span>
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
  </a>,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 pl-5 text-foreground/80" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 pl-5 text-foreground/80" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground mb-4" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-md overflow-x-auto mb-4 text-sm text-foreground" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-muted px-1 py-0.5 rounded text-accent" {...props} />
  ),
  img: (props: any) => <img className="my-4 rounded-lg shadow-md mx-auto border border-white/20" {...props} />,
};

type BlogPostClientProps = {
  postData: PostData & { serializedContent: MDXRemoteSerializeResult };
};

export default function BlogPostClient({ postData }: BlogPostClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-3xl"
    >
      <article className="prose dark:prose-invert lg:prose-xl">
        <h1 className="text-5xl font-extrabold mb-4 text-foreground tracking-widest animate-flicker">{postData.title}</h1>
        <p className="text-muted-foreground text-lg mb-6">{postData.date}</p>
        <div className="markdown-content">
          <MDXRemote {...postData.serializedContent} components={components} />
        </div>
      </article>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <Link href="/blog" className="text-accent hover:underline relative overflow-hidden group text-lg">
          <span className="relative z-10">← Back to blog</span>
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
        </Link>
      </motion.div>
    </motion.div>
  );
}
