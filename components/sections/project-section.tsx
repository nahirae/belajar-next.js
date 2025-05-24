"use client"

import { ArrowUpRight } from "lucide-react"

export const ProjectSection = () => {
  const projects = [
    {
      title: "Daily Journal",
      description: "A lifestyle app for students living in kos, helping with budget, recipes, and community tips.",
      link: "https://github.com/nahirae/dailyjournal_pbw",
    },
    {
      title: "Heart Disease Detector",
      description: "A web app using ML to predict heart disease risk, designed for non-tech-savvy users.",
      link: "https://github.com/nahirae/datmin-final-projek",
    },
    {
      title: "Online Health Consult System",
      description: "A simple registration and consultation app for clinics, built with Node.js and MySQL.",
      link: "https://github.com/nahirae/datmin-final-projek",
    },
  ]

  return (
    <section id="project" className="w-full px-6 md:px-12 py-20 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold glitch" data-text="Projects">
        Projects
      </h2>
      <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-400">
        Here are some of the things I’ve built. All designed and developed by me with love, code, and coffee.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 brutalist-border brutalist-shadow bg-blue-700 text-white hover:bg-blue-900 transition-all"
          >
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              {project.title}
              <ArrowUpRight size={20} />
            </h3>
            <p className="text-sm text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
