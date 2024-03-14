import Image from 'next/image'
import React from 'react'
import ImageSkills from "@/app/components/sub/ImageSkills"
const LeftColumn = () => {
  return (
    <div className="md:mt-[70px] flex flex-col md:w-[50%] min-h-[45%] px-6 md:px-20 md:fixed md:py-5 md:top-20 md:bottom-0 " >
      <div className='flex items-center gap-4'>
        <Image
          src="/profile-img-2.png"
          alt="profile image"
          height={90}
          width={90}
          className="object-contain border-2 border-black rounded-full"
        />
        <div>
          <h1 className="font-[700]  md:text-5xl text-3xl">Long Le</h1>
          <h2 className="capitalize font-[500] md:text-xl text-sm mt-[10px]">Full-stack Developer</h2>
        </div>
      </div>

      <p className="text-base mt-[30px]">
        <span className="font-semibold ">Passionate and skilled</span> full-stack developer with expertise in cross-platform development. I am <span className="font-semibold">commited to exellence </span>to deliver seamless user experiences.
      </p>
      <button className="px-[20px] py-[10px] text-white bg-black mt-[30px] w-[150px] rounded-lg">
        Contact me
      </button>
      <h3 className="text-xl font-[600] mt-10">My skills are</h3>
      <ImageSkills />
    </div>
  )
}

export default LeftColumn