"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PostData } from '../lib/posts';
import { Card } from '@/components/ui/card';

type BlogPostsClientProps = {
  posts: PostData[];
};

export default function BlogPostsClient({ posts }: BlogPostsClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center tracking-widest animate-flicker">Blog</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Explore long-form technical deep dives, system blueprints, and concept design for agentic tools and AI infrastructure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ slug, title, date, description }: PostData) => (
          <motion.div
            key={slug}
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card className="h-full flex flex-col justify-between">
              <Link href={`/blog/${slug}`} className="block p-6">
                <h2 className="text-2xl font-semibold mb-2 text-foreground">{title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{date}</p>
                <p className="text-foreground/80">{description}</p>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
