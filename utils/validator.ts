const isEmpty: (string: string) => boolean = (string) => string === ''

export const isValidEmail: (email: string) => {
  error: boolean
  text: string
} = (email) => {
  if (
    isEmpty(email) ||
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  )
    return {
      error: true,
      text: 'Email is invalid, please insert a valid email',
    }
  return {
    error: false,
    text: '',
  }
}

export const isValidName: (message: string) => ({ text: string; error: boolean }) = (
  name
) => {
  if (isEmpty(name) || name.length > 20 || name.length < 2)
    return {
      error: true,
      text: 'Name length has to be between 2 and 20 chars',
    }
  return {
    error: false,
    text: '',
  }
}

export const isValidMessage: (message: string) => ({ text: string; error: boolean }) = (
  message
) => {
  if (isEmpty(message) || message.length > 1000 || message.length < 10)
    return {
      error: true,
      text: 'Message length has to be between 10 and 1000 chars',
    }
  return {
    error: false,
    text: '',
  }
}
