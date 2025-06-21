"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Art", href: "/art" },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-14 items-center justify-center">
      
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-accent relative overflow-hidden group"
            >
              <span className="relative z-10">{link.name}</span>
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
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
