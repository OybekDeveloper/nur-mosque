import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <main className='pb-2 flex justify-center items-center gap-2'>
      <div className=" h-[65vh] w-7/12 rounded-md overflow-hidden relative flex justify-center items-center">
        <div className="flex justify-end items-end text-white absolute top-0 left-0 px-2 pb-6 w-full h-full bg-black/20 z-10">
          <div className='flex flex-col justify-center items-center gap-4 w-2/3 text-center'>
            <h1 className='text-3xl'>Welcome to Nur Mosque</h1>
            <p className="text-md">A place of peace, community, and spiritual growth. Join us for prayers, events, and learning.</p>
            <Button className={"h-12 px-6 bg-[#14944A] hover:bg-[#14944A] text-md pt-2"}>
              Learn More
            </Button>
          </div>
        </div>
        <Image className='w-full h-full -z-10 object-cover' loading="eager" src="/images/1.png" alt="1" width={500} height={500} />
      </div>
    </main>
  )
}
