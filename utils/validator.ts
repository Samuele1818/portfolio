export const isValidEmail: (
 email: string
) => boolean = (email) => {
 // return true if regex is valid
 return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  email
 )
}

export const isValidName: (
 message: string
) => boolean = (name) => {
 // check if name length is > 2 and < 20
 return name.length < 20 || name.length > 2
}

export const isValidMessage: (
 message: string
) => boolean = (message) => {
 // check if message length is < 1000 and > 10
 return (
  message.length < 1000 || message.length > 10
 )
}

export const setWithExpiry = (
 key,
 value,
 ttl
) => {
 const now = new Date()

 const item = {
  value: value,
  expiry: now.getTime() + ttl,
 }
 localStorage.setItem(key, JSON.stringify(item))
}

export const getWithExpiry = (key) => {
 const itemStr = localStorage.getItem(key)
 if (!itemStr) return null
 const item = JSON.parse(itemStr)
 const now = new Date()

 if (now.getTime() > item.expiry) {
  localStorage.removeItem(key)
  return null
 }
 return item.value
}
