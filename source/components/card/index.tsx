import type { Movie } from '@/source/types'
import type { FC } from 'react'

import Link from 'next/link'

interface Info extends Omit<Movie, 'countries' | 'posterUrl' | 'genres'> {
  index: number
}

export const Card: FC<Info> = ({
  id,
  index,
  posterUrlPreview,
  nameRu,
  nameOriginal,
  year,
  rating,
  type,
  description,
}) => {
  return (
    <Link href={`/details/${id}`}>
      <div className='flex flex-col md:flex-row md:items-center bg-gray-light border border-gray rounded-lg shadow overflow-hidden hover:bg-gray-dark hover:text-white'>
        <div className='px-2 h-full text-center'>{index}</div>

        <img
          className='object-cover w-full h-96 md:h-auto md:w-48'
          src={posterUrlPreview}
          alt={`${nameRu}-preview`}
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h3 className='mb-2 text-2xl font-bold tracking-tight'>
            {nameRu}
          </h3>
          {nameOriginal && (
            <h4 className='mb-2 text-xl font-bold tracking-tight'>
              ({nameOriginal})
            </h4>
          )}
          <p className='mb-3 font-normal'>
            Год: {year}
          </p>
          <p className='mb-3 font-normal'>
            Рейтинг: {rating}
          </p>
          <p className='mb-3 font-normal'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
