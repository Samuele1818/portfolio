import { createElement, FC } from 'react'

interface Props {
 elementType?: 'input' | 'textarea' // Specify if element has to be an input or a textarea
 name?: string // Name of the field
 label?: string // Text of the floating label
 inputType?: string // Choose the input type (e.g. email, text)
 rows?: number // Specify number of rows in a textarea
 required?: boolean // Specify if input is required
 minLength?: number // Specify the min length of the content (works only if required is true)
 maxLength?: number // Specify the max length of the content (works only if required is true)
 errorText?: string // Text to display when input has error
}

/*
  Take user input and check if it is valid, show error if not.
*/
const Input: FC<Props> = ({
 label,
 inputType = 'text',
 elementType = 'input',
 rows = 8,
 required = true,
 minLength,
 maxLength,
 errorText,
 name,
}) => {
 // Create a unique id to link label and input
 const id = Math.random().toPrecision(5)

 return (
  <div className='relative h-fit w-full'>
   {
    // Create the element based on the elementType
    createElement(elementType, {
     type: inputType,
     id: id,
     className:
      'resize-none block px-2.5 pb-2.5 pt-4 w-full md-text text-bastille bg-transparent border-[1px] border-bastille appearance-none focus:outline-none focus:ring-0 focus:border-electricViolet peer invalid:border-red-600',
     placeholder: ' ',
     rows: rows, // Assign the number of rows in case the element would be a textarea
     minLength: minLength, // Required is a mandatory to make minLength works
     maxLength: maxLength,
     name: name,
     onFocus: (e) => {
      e.target.setAttribute('init', 'true') // Set an attribute to check that the input has been opened at least one time
     },
     onBlur: (e) => {
      // On blur assign value to the input required attribute to avoid show error before input has been even selected if it's required
      e.target.required = required // specify if the filed is required to submit the form
     },
    })
   }
   <label
    htmlFor={`${id}`}
    className='sm-text absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-invalid:text-red-600 peer-invalid:peer-placeholder-shown:top-1/4 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-electricViolet peer-invalid:peer-focus:top-2'>
    {label}
   </label>
   {/* The paragraph has a fixed height to prevent total height of the div to be dynamically and so avoid label to be in different y position */}
   <p className='xs-text mt-2 hidden h-12 text-red-600 peer-invalid:block'>
    {errorText}
   </p>
  </div>
 )
}

export default Input
