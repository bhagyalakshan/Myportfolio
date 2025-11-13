"use client"

import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
          </div>

         <motion.div
  className="space-y-6 text-foreground/80 leading-relaxed"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.p variants={itemVariants}>
    Hi, I’m <span className="text-primary font-semibold"><a href="https://www.linkedin.com/in/bhagya-lakshan-3b7a07245"> Bhagya Lakshan</a></span>, a passionate 
    <span className="text-primary font-semibold"> Full Stack Developer</span> and 
    <span className="text-primary font-semibold"> Tech Enthusiast</span> dedicated to turning ideas into impactful digital experiences. 
    With a keen interest in <span className="underline decoration-primary/40">emerging technologies</span> and 
    <span className="text-primary font-semibold"> AI-driven solutions</span>, I strive to build innovative applications that solve 
    <span className="font-semibold text-primary"> real-world problems</span>.
  </motion.p>

  <motion.p variants={itemVariants}>
    Over the years, I’ve combined my 
    <span className="text-primary font-semibold"> technical expertise</span> with a strong commitment to 
    <span className="text-primary font-semibold"> community and education</span>, mentoring students through initiatives like the 
    <span className="underline decoration-primary/40"> Career Compass</span> program and contributing to 
    <span className="text-primary font-semibold"> CSR projects</span> that enhance access to knowledge and opportunities.
  </motion.p>

  <motion.p variants={itemVariants}>
    I thrive at the intersection of 
    <span className="text-primary font-semibold"> technology</span>, 
    <span className="text-primary font-semibold"> creativity</span>, and 
    <span className="text-primary font-semibold"> social impact</span>, whether developing 
    <span className="underline decoration-primary/40"> scalable web applications</span>, exploring 
    <span className="text-primary font-semibold"> AI</span> and 
    <span className="text-primary font-semibold"> Machine Learning</span>, or volunteering to empower the next generation of innovators. 
    When I’m not coding, I enjoy exploring new places, staying up-to-date with the latest 
    <span className="text-primary font-semibold"> tech trends</span>, and sharing knowledge with others — all while continuing to grow as a 
    <span className="font-semibold text-primary"> technology leader</span> and creating solutions that make a 
    <span className="underline decoration-primary/40"> meaningful difference</span>.
  </motion.p>
</motion.div>

        </motion.div>
      </div>
    </section>
  )
}
