import {
 Dispatch,
 SetStateAction,
 useState,
} from 'react'

const useFormFieldStorage: () => [
 { error: boolean; text: string },
 Dispatch<
  SetStateAction<{ error: boolean; text: string }>
 >
] = () => {
 // Store information about form field
 const [fieldInformation, setFieldInformation] =
  useState<{
   error: boolean // if field has an error
   text: string // text to display below field
  }>({ error: true, text: '' })

 return [fieldInformation, setFieldInformation]
}

export default useFormFieldStorage
