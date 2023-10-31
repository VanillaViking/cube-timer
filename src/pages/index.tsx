import Image from 'next/image'
import { Inter } from 'next/font/google'
import TestComponent from '@/components/TestComponent'
import ScrambleHeader from '@/components/Scramble/ScrambleHeader'
import Timer from '@/components/Timer/Timer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-12 ${inter.className}`}
    >

      <ScrambleHeader test="Hello World" />
      <Timer />
    </main>
  )
}
