"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "/mentorly.png",
    title: "Mentorly - Learning Platform (working & personal )",
    description:
      "A full-stack learning management system built with MERN stack, featuring course management, student progress tracking, and instructor dashboards. Complete with authentication, responsive design, and real-time features.",
    image: "/images/mentorly.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Redux Toolkit", "JWT", "Docker"],
    demoUrl: "https://mentorly-app.vercel.app/",
    adminUrl: "https://mentorly-admin.vercel.app/login",
    githubUrl: "",
    features: [
      "Full MERN stack implementation with TypeScript",
      "Student and instructor role-based dashboards",
      "Course progress tracking and analytics",
      "JWT authentication and secure API endpoints",
      "Responsive design with Tailwind CSS",
      "Docker containerization and CI/CD with GitHub Actions",
      "Real-time notifications and progress updates",
    ],
  },
  {
    logo: "/matchwize.svg",
    title: "Al Saad Home",
    description:
      "An e-commerce platform for luxury home products built with a scalable architecture. It includes dynamic product listings, cart functionality, internationalization, and performance-optimized UI components.",
    image: "/images/as-saad-home.png",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "Shadcn UI", "Framer Motion", "Express.js", "MongoDB"],
    demoUrl: "https://next-alsaad-ucku.vercel.app/en/aed",
    githubUrl: "",
    features: [
      "State management using Zustand for cart and filters",
      "Framer Motion for smooth UI animations",
      "Responsive, RTL-compatible design with Tailwind CSS",
      "SEO and performance optimization using Next.js",
      "Multi-language support and region-based pricing",
      "Dynamic product detail and category pages",
    ],
  },


  {
    logo: "/englishexpresswayLogo.svg",
    title: "Neesha E-commerce",
    description:
      "A fashion and lifestyle e-commerce platform offering a seamless shopping experience. Built with React.js, the project includes cart management, wishlist functionality, and responsive product galleries.",
    image: "/images/neesha.png",
    tags: ["React.js", "Zustand", "MUI", "Tailwind CSS", "Razorpay", "React Router"],
    demoUrl: "https://lusiveksa.y2code.com/en/",
    githubUrl: "",
    features: [
      "Zustand-based state management for cart and wishlist",
      "Material UI components for polished and accessible UI",
      "Tailwind CSS for responsive design",
      "Product filters, sorting, and pagination",
      "Secure payments using Razorpay integration",
      "Admin dashboard for inventory and product management",
    ],
  },

]

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] sm:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  
                  {/* Admin button for Mentorly */}
                  {project.adminUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.adminUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Admin
                      </Link>
                    </Button>
                  )}
                  
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}