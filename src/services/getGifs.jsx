import { API_KEY, API_URL } from './settings'

export default async function getGifs({
  keyword = 'welcome',
  limit = 12,
  rating = 'g',
  page = 0
} = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=es`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        return gifs
      }
      return []
    })
}
