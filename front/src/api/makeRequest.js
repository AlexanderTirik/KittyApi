function getFetchUrl(endpoint) {
  return `${API_URL}:${API_PORT}` + endpoint
}
function getFetchArgs(type, body) {
  const headers = {}
  if (body) {
    headers["Content-Type"] = "application/json"
    headers.Accept = "application/json"
  }
  if (body && type === "GET") {
    throw new Error("GET request does not support request body.")
  }
  return {
    method: type,
    headers,
    body,
  }
}

export async function throwIfResponseFailed(res) {
  if (res.error) {
    let parsedException = "Something went wrong with request!"
    try {
      parsedException = await res.json().message
    } catch (err) {
      //
    }
    throw parsedException
  }
}

export default async function makeRequest(type, endpoint, body) {
  const res = await fetch(getFetchUrl(endpoint), getFetchArgs(type, body))
  const response = await res.json()
  await throwIfResponseFailed(response)
  return response
}
