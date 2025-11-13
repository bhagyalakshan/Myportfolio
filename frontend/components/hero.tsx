"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

const roles = ["Full Stack Developer", "Tech Enthusiast", "Emerging Tech Leader", "Passionate Volunteer"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left flex-1"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance"
          >
            Bhagya Lakshan
          </motion.h1>

          <div className="h-12 flex justify-center md:justify-start items-center mb-6">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-primary"
            >
              {roles[currentRole]}
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/75 leading-relaxed text-balance"
          >
            Turning ideas into impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="/bhagyacv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative w-full max-w-md flex-1"
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-primary/30">
            {/* Actual Profile Image */}
            <img
              src="/prop1.jpg"
              alt="Bhagya Lakshan"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Optional animated border without tint */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 pointer-events-none" />

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-4 right-4 w-16 h-16 bg-accent/20 rounded-lg border border-accent/50"
            />
            <motion.div
              animate={{ y: [20, 0, 20] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-8 left-4 w-12 h-12 bg-primary/20 rounded-full border border-primary/50"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="flex justify-center mt-16"
      >
        <div className="text-center text-foreground/50 text-sm">
          Scroll to explore
          <div className="mt-2">↓</div>
        </div>
      </motion.div>
    </section>
  )
}
