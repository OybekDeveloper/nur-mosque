import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='text-[#638773] w-full flex justify-center items-center bg-gray-100 dark:bg-gray-800'>
      <main className='max-w-[1440px] mx-auto w-11/12 py-6 flex justify-center items-center flex-col gap-4'>
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
        <div className='flex justify-center items-center gap-4'>
          <Image loading='eager' src="/icons/facebook.svg" alt="Twitter Icon" width={24} height={24} className="inline-block mr-2" />
          <Image loading='eager' src="/icons/twitter.svg" alt="Twitter Icon" width={24} height={24} className="inline-block mr-2" />
          <Image loading='eager' src="/icons/instagram.svg" alt="Twitter Icon" width={24} height={24} className="inline-block mr-2" />
        </div>
        <div>
          <p className='text-sm'>
            © {new Date().getFullYear()} Nur Mosque. All rights reserved.
          </p>
        </div>
      </main>
    </footer>
  )
}
