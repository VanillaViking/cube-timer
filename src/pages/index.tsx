import Image from 'next/image'
import { Inter } from 'next/font/google'
import TestComponent from '@/components/TestComponent'
import Timer from '@/components/Timer/Timer'
import dynamic from 'next/dynamic'
import {useState} from 'react'
import { generateScramble } from '../components/Scramble/ScrambleHeader'
import Visualiser from '@/components/Visualiser/Visualiser'
 
const NoSSRScrambleHeader = dynamic(() => import('../components/Scramble/ScrambleHeader'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [latestSolve, setLatestSolve] = useState<number>();
  const [scramble, setScramble] = useState<string>(generateScramble());

  return (
    <main
      className={`flex min-h-screen flex-col justify-between items-center p-12 bg-black text-white ${inter.className}`}
    >

      <NoSSRScrambleHeader latestSolve={latestSolve} />
      <Timer setLatestSolve={setLatestSolve}/>
      <Visualiser scramble={scramble}/>
    </main>
  )
}
