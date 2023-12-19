import SideNavBar from '@/app/components/main/SideNavBar'
import Image from 'next/image'
import LeftColumn from './components/main/LeftColumn'
import RightColumn from './components/main/RightColumn'

import {Roboto_Serif} from 'next/font/google'

const roboto = Roboto_Serif({
  subsets:['latin']
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="flex h-[2000px] overflow-x-hidden">
        <SideNavBar/>
        <div className="flex-1 md:flex h-screen relative pl-20 pt-20 -z-10">
          <LeftColumn/>
          <RightColumn/>
        </div>
      </div>
    </div>
  )
}
