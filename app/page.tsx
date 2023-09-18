import { fetchServerData } from '@/source/utilities'

import { TopList } from '@/source/slices/index/topList'

export default async function Home() {
  const data = await fetchServerData({
    path: '/data',
    params: { _sort: 'rating' },
  })

  return (
      <div className='container mx-auto px-5 pb-20'>
        <TopList initialData={data} />
      </div>
  )
}
