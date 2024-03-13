export const SkillList = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 pb-2 ">
      {skills.map((skill) => (
        <span className="p-2 text-[10px] text-white bg-black rounded-lg" key={skill}>
          {skill}
        </span>
      ))}

    </div>
  )
}