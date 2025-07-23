import { Globe, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './dark-mode'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 h-20 w-full bg-white dark:bg-black shadow-md'>
      <main className='max-w-[1440px] mx-auto w-11/12 flex justify-between items-center h-full px-4 '>
        <div className='flex justify-start items-center gap-3'>
          <Image src="/logo.svg" alt="Nur Mosque Logo" width={50} height={50} />
          <h1 className='font-bold text-2xl'>
            Nur Mosque
          </h1>
        </div>
        <div className='flex justify-end items-center gap-6'>
          <ul className='font-[500] text-lg flex justify-start items-center gap-3'>
            <li className='inline-block mr-4'>
              <Link href="/">Home</Link>
            </li>
            <li className='inline-block mr-4'>
              <Link href="/about">About</Link>
            </li>
            <li className='inline-block'>
              <Link href="/contact">Events</Link>
            </li>
            <li className='inline-block'>
              <Link href="/contact">Resources</Link>
            </li>
            <li className='inline-block'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className='flex justify-center items-center gap-2'>
            <Button variant="outline" size="icon">
              <Search size={24} />
            </Button>
            <Button variant="outline" size="icon">
              <Globe size={24} />
            </Button>

            {/* <ModeToggle /> */}
          </div>
          <Avatar className="rounded-full">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </main>
    </header>
  )
}
