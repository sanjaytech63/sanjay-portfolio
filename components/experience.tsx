"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "BVM Solutions Ltd. Pvt.",
    period: "April 2024 - Present",
    responsibilities: [
      "Worked on a blog platform project to create engaging and dynamic content management features",
      "Optimized blog platform for SEO and improved page load speed to enhance user experience and search engine rankings",
      "Developed a responsive and customizable blog interface using Next.js and TailwindCSS, enhancing user experience",
    ],
    skills: ["Next.js", "ReactJs", "JavaScript", "TailwindCSS"],
  },

  {
    title: "Frontend Developer | React, Next.js",
    company: "Y2Code Solution Private Limited",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Worked full-time on the Al Saad Home e-commerce project, developing a seamless shopping experience",
      "Designed and implemented responsive product listing and checkout pages using React.js, enhancing UI/UX and user engagement",
    ],
    skills: ["React", "JavaScript", "UI/UX", "Responsive Design", "E-commerce"],
  },

  {
    title: "Frontend Developer | React, Next.js",
    company: "Y2Code Solution Private Limited",
    period: "March 2025 – Present",
    responsibilities: [
      "Developing and maintaining the e-commerce app Neesha.com using React and Next.js",
      "Implementing responsive UI components and optimizing performance for seamless user experience",
      "Managing complex application state efficiently using Zustand",
    ],
    skills: ["React", "Next.js", "JavaScript", "E-commerce", "Performance Optimization", "Zustand"],
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}