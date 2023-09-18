type Genre = { genre: string }
type Country = { country: string }
type Staff = {
  directors: string[]
  screenwriters: string[]
  actors: string[]
}

export interface Movie {
  id: number
  nameRu: string
  nameOriginal: string
  countries: Country[]
  genres: Genre[]
  rating: number
  year: number
  type: string
  staff: Staff
  pictures: string[]
  description: string
  posterUrl: string
  posterUrlPreview: string
}
