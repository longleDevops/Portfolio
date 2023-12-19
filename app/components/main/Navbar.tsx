import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full h-[90px] fixed z-50 pl-40 pr-[90px] flex items-center justify-between bg-white max-md:flex-col max-md:pt-[20px] max-md:h-32">
      <div className="flex gap-2">
        <Image
          src="gmail-2.svg"
          alt="gmail icon"
          width={20}
          height={20}
          
          />
        <p className="underline">long.le.devops@gmail.com</p>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex items-center justify-center">
          
          <h4>Resume</h4>
        </div>
        <div className="flex items-center">
        
          <h4>Projects</h4>
        </div>
        <div>
          <h4>Contact me</h4>
        </div>
      </div>
    </nav>
  )
}

export default Navbar