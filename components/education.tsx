"use client"

import { motion } from "framer-motion"

const education = [
  {
    institution: "University of Rajasthan, Jaipur",
    degree: "Bachelor of Computer Applications (BCA) (2021 – 2024)",
    icon: "🎓"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                {edu.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}