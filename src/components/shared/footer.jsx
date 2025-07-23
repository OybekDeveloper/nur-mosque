import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800'>
      <main className='text-[#638773] max-w-[1440px] mx-auto w-11/12 py-6 flex justify-center items-center flex-col gap-4'>
        <ul className='flex w-full justify-around items-center gap-4'>
          <li className='inline-block mr-4'>
            <a href="/">About us</a>
          </li>
          <li className='inline-block mr-4'>
            <a href="/about">Contact</a>
          </li>
          <li className='inline-block'>
            <a href="/contact">Privacy Policy</a>
          </li>
          <li className='inline-block'>
            <a href="/privacy">Terms of Service</a>
          </li>
        </ul>
        <div cla>
          <Image src="/icons/facebook.svg" alt="Twitter Icon" width={24} height={24} className="inline-block mr-2" />
          <Image src="/icons/twitter.svg" alt="Twitter Icon" width={24} height={24} className="inline-block mr-2" />
          <Image src="/icons/instagram.svg" alt="Twitter Icon" width={24} height={24} className="inline-block mr-2" />
        </div>
      </main>
    </footer>
  )
}
