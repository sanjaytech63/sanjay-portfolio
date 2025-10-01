"use client"

import { motion } from "framer-motion"
import { FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";
import { SiAxios, SiMui, SiReactquery, SiTypescript, SiReacthookform } from "react-icons/si";
import { ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    title: "Front End",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <RiNextjsFill className="text-black dark:text-white" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-cyan-400" /> },
      { name: "Ant Design", icon: <ShieldCheck className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
      { name: "MUI", icon: <SiMui className="text-blue-700" /> },
      // { name: "React-Hook-Form", icon: <SiReacthookform className="text-purple-500" /> },
    ],
  },

  {
    title: "Data Fetching",
    skills: [
      { name: "Axios", icon: <SiAxios className="text-sky-600" /> },
      {
        name: "SWR",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h16v2H4V4zm0 7h10v2H4v-2zm0 7h16v2H4v-2z" />
          </svg>
        )
      },
      { name: "TanStack Query", icon: <SiReactquery className="text-red-500" /> },
      {
        name: "Zustand",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 15 8H9l3-6zm0 20-3-6h6l-3 6zm10-10-6 3V9l6 3zM2 12l6-3v6l-6-3z" />
          </svg>
        )
      },
      {
        name: "Fetch API",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 13h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
        )
      },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "Netlify", icon: <span className="font-bold text-green-600">N</span> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Figma", icon: <IoLogoFigma className="text-purple-600" /> },
      { name: "Vercel", icon: <IoLogoVercel className="text-black dark:text-white" /> },
    ],
  },
  {
    title: "Performance & Optimization",
    skills: [
      { name: "Lighthouse", icon: <span className="text-xl text-green-500">L</span> },
      { name: "Core Web Vitals", icon: <span className="text-xl text-blue-600">CWV</span> },
      { name: "Image Optimization", icon: <span className="text-xl text-purple-500">IMG</span> },
      { name: "Lazy Loading", icon: <span className="text-xl text-orange-600">LL</span> },
    ],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Technologies and tools I've worked with throughout my projects and experience
        </motion.p>

        <motion.div
          className="grid gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <motion.h3
                className="text-xl font-semibold mb-4"
                whileHover={{
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center gap-2 group"
                    variants={item}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-xl
                        group-hover:bg-muted/50 transition-colors duration-300
                        border border-transparent group-hover:border-primary/20"
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      title={skill.name}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
