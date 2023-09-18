import type { NextPage } from 'next'

import { fetchServerData } from '@/source/utilities'

import Link from 'next/link'
import { Description } from '@/source/slices/details/description'
import { Slider } from '@/source/slices/details/slider'

interface DetailsProperties {
  params: {
    id: string
  }
}

const Details: NextPage<DetailsProperties> = async ({ params }) => {
  const data = await fetchServerData({
    path: `/data/${params.id}`,
  })

  return (
    <div className='container mx-auto px-5 pb-20'>
      <Link className='flex mb-5 w-fit uppercase text-white hover:text-black' href='/'>Назад</Link>
      <Description {...data} />
      <Slider pictures={data.pictures} />
    </div>
  )
}

export default Details
