"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap, Star } from "lucide-react"

const leadershipRoles = [
  {
    year: "2025/2026",
    role: "Member Coordinator and Zone C Lead Coordinator",
    organization: "IEEE Innovation Nation Sri Lanka, IEEE Young Professionals Sri Lanka",
    description:
      "Coordinating Zone C operations and mentoring teams to foster innovative, community-focused tech solutions across Sri Lanka.",
    icon: Award,
  },
  {
    year: "2025/2026",
    role: "Marketing and Publicity Lead",
    organization: "FOSS Community of Uva Wellassa University",
    description:
      "Leading marketing initiatives and managing publicity strategies to promote open-source awareness and events within the university community.",
    icon: Users,
  },
  {
    year: "2025/2026",
    role: "Treasurer",
    organization: "IEEE Computer Society of Uva Wellassa University Student Branch",
    description:
      "Managing financial operations and ensuring sustainable funding for society-led technical and community initiatives.",
    icon: Zap,
  },
   {
    year: "2024/2025",
    role: "Member Coordinator",
    organization: "IEEE Sri Lanka Inspire, IEEE Young Professionals Sri Lanka",
    description:
      "Collaborated with regional YP teams to coordinate member engagement and facilitate career development activities for students.",
    icon: Star,
  },
  {
    year: "2024/2025",
    role: "Marketing Team Member",
    organization: "FOSS Community of Uva Wellassa University",
    description:
      "Assisted in creating engaging promotional content and supported technical event organization under the FOSS community framework.",
    icon: Users,
  },
  {
    year: "2024/2025",
    role: "Member of Membership Development Standing Committee",
    organization: "IEEE Industry Applications Society of Uva Wellassa University Student Branch",
    description:
      "Supported strategic membership growth initiatives and outreach programs within the IEEE IAS community.",
    icon: Award,
  },
 
  {
    year: "2025",
    role: "Promotion Committee Member",
    organization: "‘Venturify’ – IEEE Student Branch of SLITT",
    description:
      "Contributed to event promotion strategies and outreach planning for the national innovation competition ‘Venturify’.",
    icon: Users,
  },
  {
    year: "2025",
    role: "IEEE IAS Outreach Team Member",
    organization: "IEEE IAS Chapter of University of Ruhuna",
    description:
      "Collaborated with outreach initiatives to promote IEEE IAS activities among Sri Lankan university student branches.",
    icon: Zap,
  },
  {
    year: "2024",
    role: "Delegate",
    organization: "IEEE Sri Lanka Section Students | Young Professionals | Women In Engineering Congress",
    description:
      "Represented Uva Wellassa University at the premier IEEE national congress, fostering collaboration and networking across student branches.",
    icon: Award,
  },
]

const volunteeredProjects = [
  {
    year: "2023",
    role: "Chairperson",
    organization: "Lush Project – Rotaract Club of Uva Wellassa University",
    description:
      "Led a major community sustainability initiative under Rotaract, promoting eco-friendly practices and awareness.",
    icon: Award,
  },
  {
    year: "2023",
    role: "Main Coordinator",
    organization: "Pillam Project – Rotaract Club of Uva Wellassa University",
    description:
      "Managed event logistics, coordination, and volunteer operations to support underprivileged communities.",
    icon: Users,
  },
  {
    year: "2024",
    role: "Program Team Lead",
    organization: "Volunteer Training Session Series – IEEE Student Branch of Uva Wellassa University",
    description:
      "Led the program team in organizing volunteer training sessions to empower students with leadership and teamwork skills.",
    icon: Zap,
  },
  {
    year: "2023",
    role: "Degree Coordinator",
    organization: "CST Degree Program, Uva Wellassa University",
    description:
      "Served as degree coordinator, supporting academic coordination and student engagement within the CST degree program.",
    icon: Users,
  },
  {
    year: "2023",
    role: "Logistics Team Member",
    organization: "ElectroQuesta – Robotics and Automation Society, Uva Wellassa University",
    description:
      "Assisted in event logistics and coordination for a robotics challenge, ensuring smooth technical operations.",
    icon: Zap,
  },
  {
    year: "2024",
    role: "Program Team Member",
    organization: "SHEODERess <V6.0> – IEEE Women in Engineering Affinity Group, Uva Wellassa University",
    description:
      "Collaborated with the WIE Affinity Group to organize empowering workshops and tech sessions promoting women in engineering.",
    icon: Users,
  },
  {
    year: "2024",
    role: "Finance Team Member",
    organization: "UvaExtreme 1.0 – IEEE Computer Society, Uva Wellassa University",
    description:
      "Handled budgeting and financial management for a major inter-university competition organized by the IEEE Computer Society.",
    icon: Award,
  },
  {
    year: "2024",
    role: "Program Team Member",
    organization: "IdeaScape (Research Idea Competition) – IEEE IAS Chapter, Uva Wellassa University",
    description:
      "Supported the program coordination for a research-focused event aimed at encouraging student innovation.",
    icon: Zap,
  },
  {
    year: "2023",
    role: "Degree Coordinator",
    organization: "IEEE IAS Chapter, Uva Wellassa University",
    description:
      "Coordinated degree-level member participation in IEEE IAS initiatives and events.",
    icon: Users,
  },
  {
    year: "2023",
    role: "Volunteer of the Month (September)",
    organization: "Rotaract Club of Uva Wellassa University",
    description:
      "Recognized for exceptional volunteer service and commitment to community-driven projects.",
    icon: Star,
  },
]

export default function Leadership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Leadership & Volunteering
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Driving innovation through community leadership and impactful initiatives
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Leadership Roles */}
          {leadershipRoles.map((role, index) => {
            const Icon = role.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{role.role}</h3>
                        <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full w-fit">
                          {role.year}
                        </span>
                      </div>
                      <p className="text-foreground/60 font-medium mb-3">{role.organization}</p>
                      <p className="text-foreground/75 leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Volunteered Projects */}
          {volunteeredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative bg-card border border-border/50 rounded-xl p-8 hover:border-accent/50 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-lg">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{project.role}</h3>
                        <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-1 rounded-full w-fit">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-foreground/60 font-medium mb-3">{project.organization}</p>
                      <p className="text-foreground/75 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
