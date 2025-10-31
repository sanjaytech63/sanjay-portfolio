"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail, MapPin, Database, Server } from "lucide-react"
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiJavascript, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-4 md:py-5">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-2"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Sanjay Choudhary</h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              React.js | Next.js | MERN Stack 
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:sanjay.webdev6375@gmail.com">sanjay.webdev6375@gmail.com</a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Rajasthan, India</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base">
            Full Stack Developer specializing in MERN stack with expertise in building scalable,
            high-performance web applications. Passionate about creating seamless user experiences
            with React/Next.js frontends and robust Node.js/Express backends. Dedicated to writing
            clean, maintainable code and solving complex problems across the entire stack.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              href="/Sanjay.pdf"
              target="_blank"
              download
            >
              <Button size="sm" className="text-xs sm:text-sm">
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
              </Button>
            </Link>
            <Link
              href="https://github.com/sanjaytech63"
              target="_blank"
            >
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link
              href="mailto:sanjay.webdev6375@gmail.com"
              target="_blank"
            >
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sanjay-choudhary"
              target="_blank"
            >
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center h-48 md:h-auto"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Grid with floating tech stacks */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
              {/* Top Left - React Logo */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-4xl text-[#087ea4]"
                >
                  <RiReactjsFill />
                </motion.div>
              </motion.div>

              {/* Top Right - Node.js */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="text-4xl text-green-600">
                  <FaNodeJs />
                </div>
              </motion.div>

              {/* Bottom Left - MongoDB */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-4xl text-green-500"
                >
                  <SiMongodb />
                </motion.div>
              </motion.div>

              {/* Bottom Right - Express.js */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(0, 0, 0, 0.1)",
                    "0 0 0 10px rgba(0, 0, 0, 0.1)",
                    "0 0 0 0px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                <div className="text-4xl text-black dark:text-white">
                  <SiExpress />
                </div>
              </motion.div>
            </div>

            {/* Floating tech badges around the grid - MERN Stack */}
            <motion.div
              className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              React.js
            </motion.div>

            <motion.div
              className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                y: [0, 5, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Node.js
            </motion.div>

            <motion.div
              className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                x: [0, 5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              MongoDB
            </motion.div>

            <motion.div
              className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-5 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                x: [0, -5, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              Express.js
            </motion.div>

            {/* Additional floating badges for other key technologies */}
            <motion.div
              className="absolute top-1/2 -left-8 sm:-left-10 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                x: [0, -3, 0],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
            >
              Next.js
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 sm:-right-10 bg-background px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm shadow-md border"
              animate={{
                x: [0, 3, 0],
                y: [0, 2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
            >
              TypeScript
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}