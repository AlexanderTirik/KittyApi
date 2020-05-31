import makeRequest, { throwIfResponseFailed } from "./makeRequest"
export default async function getRandomData(type, number) {
  const res = await makeRequest("GET", `/api/${type}s/random/${number}`)
  const response = await res.json()
  throwIfResponseFailed(response)
  const data = response.data
  const info = data.map((item) => item[type])
  return info
}
