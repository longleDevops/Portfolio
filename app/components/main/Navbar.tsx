import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full md:h-[90px] md:fixed z-50 md:pl-40 md:pr-[90px] px-10 flex items-center justify-between bg-white max-md:flex-col-reverse max-md:pt-[20px] max-md:h-[120px] border-b border-muted-foreground max-md:pb-6">
      <div className="flex gap-2">
        <Image
          src="gmail-2.svg"
          alt="gmail icon"
          width={20}
          height={20}

        />
        <p className="underline">long.le.devops@gmail.com</p>
      </div>
      <div className="flex md:gap-[30px] justify-between max-md:w-full ">
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