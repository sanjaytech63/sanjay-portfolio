"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "BVM Solutions Ltd.",
    period: "April 2024",
    responsibilities: [
      "Developed a blog platform with dynamic content management features using Next.js and TailwindCSS",
      "Optimized platform for SEO and improved page load speed, enhancing user experience and search engine rankings",
      "Implemented responsive and customizable blog interface, improving mobile usability and reader engagement"
    ],
    skills: ["Next.js", "React.js", "JavaScript", "TailwindCSS", "SEO", "Responsive Design"]
  },
  {
    title: "Frontend Developer | React, Next.js",
    company: "Y2Code Solution Private Limited",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js and Next.js, implementing performance optimizations that improved page load times by 30%",
      "Engineered scalable state management solutions using Redux Toolkit and Zustand, leading to a more maintainable and predictable codebase",
      "Built a library of reusable UI components with Material-UI and Tailwind CSS, standardizing the design process and reducing component development time by 25%",
      "Integrated RESTful APIs and Firebase services for backend functionality, ensuring robust data flow and user authentication",
      "Conducted peer code reviews and collaborated on debugging to enhance overall code quality and application stability"
    ],
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Redux Toolkit", "Zustand", "Material-UI", "Tailwind CSS", "Firebase", "REST APIs", "Performance Optimization"]
  },

];

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