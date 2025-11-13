"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Kumana Wild Trails",
    subtitle: "Wild Safari Booking Platform",
    description:
      "Real-time wildlife tracking and booking platform with AI features.",
    technologies: [
      "Vite React",
      "Spring Boot",
      "Bootstrap",
      "PostgreSQL",
      "AI-Powered Image Processing",
    ],
    image: "/kumana.png",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Owilka",
    subtitle: "Smart Room Booking System (Ongoing)",
    description:
      "Smart room booking system with real-time availability, user authentication, and admin dashboard.",
    technologies: ["Vite React", "Spring Boot", "Bootstrap", "MongoDB"],
    image: "/owilka.png",
    links: { github: "#", demo: "#" },
  },
  {
    title: "MyCare",
    subtitle: "Online Healthcare Platform",
    description:
      "Comprehensive healthcare platform with patient dashboards, appointment scheduling, and medical records management.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    image: "/mycare.png",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Movie Sphere",
    subtitle: "Online Movie Site",
    description:
      "Group project movie site with user authentication, movie browsing, and reviews.",
    technologies: ["React", "Django", "Tailwind CSS"],
    image: "/movie.png",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Quiz Master",
    subtitle: "An Online Quiz Creating Platform",
    description:
      "Quiz creation platform with user authentication, quiz creation, and real-time scoring.",
    technologies: ["JSP", "HTML", "CSS", "Bootstrap"],
    image: "/quiz.png",
    links: { github: "#", demo: "#" },
  },
  {
    title: "Frosto",
    subtitle:
      "AIoT-Powered Smart Cold Chain Monitoring & Anomaly Detection System (Ongoing)",
    description:
      "Designed for safe transport of vaccines, food, and medicines using AIoT and ML anomaly detection.",
    technologies: ["React.js", "Isolation Forest (ML)", "Scikit-learn", "n8n"],
    image: "/frosto.png",
    links: { github: "#", demo: "#" },
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcasing solutions built with modern technologies and best
            practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <div className="relative h-full bg-background border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-primary font-semibold mb-3 text-sm">{project.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed mb-6 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
