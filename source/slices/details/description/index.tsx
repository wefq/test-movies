import type { FC } from 'react'

import { joinArray } from '@/source/utilities'

import Image from 'next/image'
import { Movie } from '@/source/types'
import { DescriptionField } from './descriptionField'
import { Staff } from './staff'

export const Description: FC<Movie> = ({
  posterUrl,
  nameRu,
  nameOriginal,
  year,
  rating,
  description,
  genres,
  countries,
  staff,
}) => {
  return (
    <div className='flex gap-6  flex-col md:flex-row md:justify-between text-w'>
      <div className='mx-auto md:mx-0'>
        <Image
          src={posterUrl}
          height={600}
          width={300}
          alt={`${nameRu} poster`}
          priority
        />
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='text-2xl md:text-4xl font-bold'>{nameRu}</h1>
          {nameOriginal && (
            <h2 className='text-xl font-bold'>({nameOriginal})</h2>
          )}
        </div>

        <DescriptionField name='рейтинг'>{rating}</DescriptionField>

        <DescriptionField name='год'>{year}</DescriptionField>

        <DescriptionField name='жанры'>
          {joinArray(genres, 'genre')}
        </DescriptionField>

        <DescriptionField name='страны'>
          {joinArray(countries, 'country')}
        </DescriptionField>

        <DescriptionField name='описание'>{description}</DescriptionField>
      </div>

      <div className='flex flex-col gap-4'>
        <Staff name='режиссеры'>
          {staff.directors.map((person: string, index: number) => (
            <span key={index} className='whitespace-nowrap'>
              {person}
            </span>
          ))}
        </Staff>

        <Staff name='сценаристы'>
          {staff.screenwriters.map((person: string, index: number) => (
            <span key={index}>{person}</span>
          ))}
        </Staff>

        <Staff name='в ролях'>
          {staff.actors.map((person: string, index: number) => (
            <span key={index}>{person}</span>
          ))}
        </Staff>
      </div>
    </div>
  )
}
