import type { Movie, Request, URLSearchParamsInit } from '../types'

export const url = (
  path: string,
  params?: URLSearchParamsInit,
  base = 'http://localhost:3001'
): URL => {
  if (!base) {
    throw new Error('No base defined')
  }

  const result = new URL(path, base)

  result.search = new URLSearchParams(params).toString()

  return result
}

export const fetchServerData = async (request: Request) => {
  const { path, params } = request
  const res = await fetch(url(path, params), {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const fetchClientData = async (
  request: Request,
  setValue: React.Dispatch<React.SetStateAction<Movie[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true)

  const { path, params } = request

  let res = await fetch(url(path, params), {
    method: 'GET',
  })

  if (!res.ok) throw Error('could not fetch newData for that resource')

  let json = await res.json()

  setValue(json)
  setIsLoading(false)
  return json
}
