import Image from 'next/image'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className="md:fixed md:w-[100px] md:h-screen z-[100] w-full mt-8 md:mt-0 ">
      <div className="flex md:flex-col h-full items-center justify-center gap-[10px] z-60">
        <Link
          href="https://github.com/longleDevops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="github.svg"
            alt="Github logo"
            width={30}
            height={30}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/longledevops/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="linkdin.svg"
            alt="Github logo"
            width={30}
            height={30}
          />
        </Link>

      </div>
    </div>
  )
}

export default Sidebar