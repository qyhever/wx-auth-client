import { Base64 } from 'js-base64'

const TOKEN = 'galaxy-tally-token'
const USER = 'galaxy-tally-user'

export const setToken = token => {
  return localStorage.setItem(TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
  return localStorage.removeItem(TOKEN)
}

// data must be a object
export const setUser = data => {
  const enText = Base64.encode(JSON.stringify(data))
  return localStorage.setItem(USER, enText)
}

export const getUser = () => {
  const enText = localStorage.getItem(USER)
  if (!enText) {
    return null
  }
  let data = null
  try {
    const deText = Base64.decode(enText)
    data = JSON.parse(deText)
  } catch (err) {
    console.log(err)
  }
  return data
}

export const removeUser = () => {
  return localStorage.removeItem(USER)
}
