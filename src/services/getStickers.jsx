import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default async function getStickers({
  limit = 10,
  rating = 'g',
  page = 0
} = {}) {
  const apiURL = `${API_URL}/stickers/trending?api_key=${API_KEY}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
