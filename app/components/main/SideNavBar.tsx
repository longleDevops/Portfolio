import Image from 'next/image'
import Link from 'next/link'
const SideNavBar = () => {
  return (
    <div className="flex-none w-20  h-screen fixed">
      <div className="flex flex-col h-full items-center justify-center gap-[10px] z-60">
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
        <Image
          src="linkdin.svg"
          alt="Github logo"
          width={30}
          height={30}
        />

      </div>
    </div>
  )
}

export default SideNavBar