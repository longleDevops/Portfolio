"use client"
import React from 'react'
import Image from 'next/image'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    name: "Dynamite Trade",
    description: "A simulated trading platform powered by ChatGPT-3.5 Turbo that leveraages trading experience.",
    skills: ["Typescript", "Tailwind CSS", "Shadcn UI", "Prisma", "Supabass"],
    src: "/landingpage-animation.gif",
    href: "https://dynamitetrade.vercel.app"
  },
  {
    name: "Motor Master",
    description: "A car application assisting customers on making purchasing options regarding new types of cars.",
    skills: ["Java", "JavaFX", "MySQL", "CSS"],
    src: "/car-shop.png",
    href: "https://github.com/longleDevops/Car-Shop-Application"
  }
]

const RightColumn = () => {
  return (
    <div className="md:mt-[50px] flex flex-col gap-6 border-l md:pl-10 md:w-[50%] min-h-[45%] ml-auto h-[2000px] pt-6 pl-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} name={project.name} description={project.description} skills={project.skills} href={project.href} index={index} src={project.src} />
      ))}
    </div>
  )
}

export default RightColumn