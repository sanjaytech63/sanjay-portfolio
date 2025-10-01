"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
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

  {
    logo: "/thankquizLogo.svg",
    title: "Toskie",
    description:
      "Toskie is a search engine platform that connects users with local professionals including plumbers, electricians, teachers, designers, and more — all based on the user's location.",
    image: "/images/toski.png",
    tags: ["ReactJS", "Redux", "Bootstrap", "Figma", "Geolocation API", "REST API"],
    demoUrl: "https://www.toskie.com",
    githubUrl: "",
    features: [
      "Real-time location-based search to find nearby professionals",
      "Professional profile cards with ratings, reviews, and experience",
      "Filter and category-based searching (e.g., electricians, doctors, etc.)",
      "Redux for managing app-wide state (user location, service filters, etc.)",
      "Responsive UI designed in Figma and built with Bootstrap",
      "Secure and optimized API calls for listing and searching service providers",
    ],
  },

  {
    logo: "/demohub.png",
    title: "Demo Hub (Personal Build Project)",
    description:
      "Demo Hub is a personal portfolio platform I built to centralize and showcase all my deployed projects in one place. It provides recruiters and clients with a seamless way to preview live demos, explore project details, and understand my technical expertise.",
    image: "/images/demohub.png",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "Framer Motion", "Vercel", "TypeScript"],
    demoUrl: "https://demo-hub-ten.vercel.app/",
    githubUrl: "",
    features: [
      "Centralized platform to showcase all personal and client projects",
      "Interactive cards with live demo previews and project details",
      "Framer Motion animations for smooth UI transitions",
      "Zustand for managing project state and favorites",
      "Optimized Lighthouse performance with Next.js best practices",
      "Responsive and accessible design built with Tailwind CSS",
    ],
  }
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
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}