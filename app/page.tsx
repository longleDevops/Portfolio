import SideBar from '@/app/components/main/SideBar'
import Image from 'next/image'
import LeftColumn from './components/main/LeftColumn'
import RightColumn from './components/main/RightColumn'

import { Roboto_Serif } from 'next/font/google'

const roboto = Roboto_Serif({
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="relative flex-col flex-1 p-6 md:p-20 md:flex">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  )
}
