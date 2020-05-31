import makeRequest from "./makeRequest"
export default async function getRandomImage(breed) {
  const res = await makeRequest("GET", `/api/images/random/${breed}`)
  res.blob()
  const image = await res.url
  return image
}
