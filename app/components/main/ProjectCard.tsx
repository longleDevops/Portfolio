import Link from "next/link"
import { SkillList } from "./Skill"
import Image from "next/image"

interface ProjectCardProps {
  name: string,
  description: string,
  skills: string[],
  href: string,
  index: number,
  src: string
}

export const ProjectCard = ({ name, description, skills, href, index, src }: ProjectCardProps) => {
  return (

    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-[280px]  overflow-hidden  shadow-2xl rounded-xl hover:ring-2 hover:ring-black ${index === 1 ? "flex-row-reverse pr-8" : "pl-8"}`}>
      <div className="w-[50%] flex flex-col pb-4 pt-8">
        <p className="text-xl font-semibold">{name}</p>
        <p className="mt-4 text-xs leading-6 text-gray-600">{description}</p>
        <div className="mt-auto ">
          <SkillList skills={skills} />
        </div>
      </div>

      <div className={`flex flex-1 pt-8 overflow-hidden ${index === 1 && "flex-row-reverse"}`}>
        <Image
          src={src}
          alt='project image'
          height={320}
          width={320}
          className={`min-w-[180%] rounded-lg  ${index === 1 ? "mr-[10%] shadow-[rgba(0,0,0,0.4)_8px_-2px_15px_0px]" : "ml-[10%] shadow-[rgba(0,0,0,0.4)_-8px_-2px_15px_0px]"}`}
        />
      </div>
    </Link>
  )
}