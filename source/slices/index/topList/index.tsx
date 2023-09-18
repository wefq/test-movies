'use client'

import type { Movie } from '@/source/types'
import type { FC } from 'react'

import { useState } from 'react'

import { fetchClientData, getUniqueKeys } from '@/source/utilities'

import { RadioInputs } from '@/source/components/interactive/radio'
import { Card } from '@/source/components/card'
import { LoadingIndicator } from '@/source/components/loadingIndicator'
import { Select } from '@/source/components/interactive/select'
import { Form } from '@/source/components/interactive/form'

interface TopListProperties {
  initialData: Movie[]
}

const radioFields = [
  { id: 'all', value: '', label: 'All' },
  { id: 'films', value: 'FILM', label: 'Movies' },
  { id: 'series', value: 'TV_SERIES', label: 'TV Series' },
]

export const TopList: FC<TopListProperties> = ({ initialData }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState<Movie[]>(initialData.slice(0, 10))

  const [year, setYear] = useState<string | number>(0)

  const [type, setType] = useState('')

  const [headline, setHeadline] = useState('сериалов и фильмов')

  const selectType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value)
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const params: Record<string, any> = {
      _sort: 'rating',
      _limit: '10',
    }

    if (type !== '') params.type = type
    if (year) params.year = year.toString()

    fetchClientData(
      {
        path: '/data',
        params,
      },
      setData,
      setIsLoading
    )

    type === ''
      ? setHeadline('сериалов и фильмов')
      : type === 'FILM'
      ? setHeadline('фильмов')
      : setHeadline('сериалов')
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <RadioInputs
          name='type'
          selectValue={selectType}
          fields={radioFields}
        />

        <Select
          label='год'
          id='year'
          value={year}
          values={getUniqueKeys<Movie>(initialData, 'year')}
          setValue={setYear}
        />
      </Form>

      <h1 className='my-6 text-3xl font-bold tracking-tight text-gray-900'>
        Топ 10 самых низкорейтинговых {headline}
      </h1>

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className='flex flex-col gap-10'>
          {data.map((item: Movie, index: any) => (
            <Card key={index} {...item} index={++index} />
          ))}
        </div>
      )}
    </div>
  )
}
