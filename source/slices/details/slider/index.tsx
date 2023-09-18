'use client'

import type { FC } from 'react'

import { Carousel } from 'flowbite-react'

interface CarouselProperties {
  pictures: string[]
}

export const Slider: FC<CarouselProperties> = ({ pictures }) => {
  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-bold'>Кадры</h2>

      <div className='flex justify-start h-72 md:w-3/6 mt-5'>
        <Carousel className='h-full w-full' pauseOnHover>
          {pictures.map((picture, index) => (
            <img
              src={picture}
              key={index}
              alt='carousel img'
              className='h-full hover:scale-150 transition duration-500 cursor-pointer object-cover'
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}
