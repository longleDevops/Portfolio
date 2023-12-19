import { Skills } from "@/constants";
import Image from 'next/image';

const ImageSkills = () => {
  return (
    <div className="flex gap-[10px] mt-[20px] items-center">
      {Skills.map((item,index)=>(
        <div key={index}>
          <Image
            src={item.Image}
            alt={item.skill_name}
            width={50}
            height={50}
            className=" min-h-[50px] max-h-[50px] block"
          />
        </div>

      ))}
    </div>
  )
}

export default ImageSkills