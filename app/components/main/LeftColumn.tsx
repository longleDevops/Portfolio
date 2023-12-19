import Image from 'next/image'
import React from 'react'
import ImageSkills from "@/app/components/sub/ImageSkills"
const LeftColumn = () => {
  return (
    <div className="mt-[70px] flex flex-col md:w-[50%] min-h-[45%] px-20 pr-[100px] " >
      <div>
        <h1 className="font-[700]  text-5xl">Long Le</h1>
        <h2 className="capitalize font-[500] text-xl mt-[10px]">Software Developer</h2>
        <p className="text-base mt-[30px]">
          <span className="font-semibold ">Passionate and skilled</span> full-stack developer with expertise in cross-platform development. I am <span className="font-semibold">commited to exellence </span>to deliver seamless user experiences.
        </p>
        <button className="px-[20px] py-[10px] text-white bg-black mt-[30px]">
          Contact me
        </button>
        <h3 className="text-xl font-[600] mt-[50px]">My skills are</h3>
        <ImageSkills/>
      </div>
    </div>
  )
}

export default LeftColumn