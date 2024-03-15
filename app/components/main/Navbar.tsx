import Image from 'next/image'
import { ExternalLink, BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="w-full md:h-[90px] md:fixed z-50 md:pl-32 md:pr-[90px] px-10 flex items-center justify-between bg-white max-md:flex-col-reverse max-md:pt-[20px] max-md:h-[120px] border-b border-muted-foreground max-md:pb-6">
      <div className="flex gap-2">
        <Image
          src="gmail-2.svg"
          alt="gmail icon"
          width={20}
          height={20}

        />
        <p className="underline">long.le.devops@gmail.com</p>
      </div>
      <div className="flex md:gap-[30px] justify-between max-md:w-full text-sm">
        <Link
          href="https://drive.google.com/file/d/1tE4y0nif4sMGUd0AlueG1sVbbDtsvuSW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex gap-1 underline underline-offset-1">
            <h4>Resume</h4>
            <ExternalLink size={16} className='mt-0.5' />
          </div>
        </Link>
        <Link
          href="https://github.com/longleDevops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex gap-1 underline underline-offset-1">
            <h4>Projects</h4>
            <BriefcaseBusiness size={16} className='mt-0.5' />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar