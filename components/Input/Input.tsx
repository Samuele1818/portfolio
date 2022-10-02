import { createElement, forwardRef, ReactNode, useLayoutEffect, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import composeRefs from '@seznam/compose-react-refs'
import { Property } from 'csstype'
import BorderColor = Property.BorderColor

type Props = {
  elementType: 'input' | 'textarea'
  initialValue?: string
  inputType?: string
  label?: string
  placeholder?: string
  containerClassName?: string
  inputContainerClassname?: string
  inputClassname?: string
  labelClassname?: string
  onChange: (value: string) => unknown
  onFocus?: () => unknown
  onBlur?: () => unknown
  required?: boolean
  statusInformation: {
    error: boolean
    text: string
  }
  children?: ReactNode
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement,
  Props>(
  (
    {
      elementType,
      inputType,
      initialValue,
      placeholder,
      label,
      containerClassName,
      inputContainerClassname,
      inputClassname,
      labelClassname,
      children,
      onChange,
      onFocus,
      onBlur,
      statusInformation,
      required= false
    },
    forwardedInputRef
  ) => {
    const [isFocussed, setIsFocussed] = useState(false)
    
    const handleChange = debounce((value: string) => {
      onChange && onChange(value)
    }, 800)
    
    const inputRef = useRef<HTMLInputElement>(null)
    
    const isFilled: boolean = inputRef.current
      ? inputRef.current.value !== ''
      : false
    
    useLayoutEffect(() => {
      if (initialValue && inputRef.current)
        inputRef.current.value = initialValue
    }, [inputRef])
    
    return (
      <div
        className={`${containerClassName} rounded-xl relative w-full`}>
        <div
          style={{
            borderColor: (statusInformation?.error &&
            isFilled
              ? 'red'
              : isFocussed && '#6600FF') as BorderColor
          }}
          className={`cursor-text relative w-full h-fit border-bastille border-opacity-30 border-[0.5px] px-4 py-2 bg-white shadow-sm rounded-xl ${inputContainerClassname}`}
          onClick={() => inputRef.current?.focus()}>
          <label
            className={`absolute left-4 -top-6 z-20 text-bastille opacity-80 ${labelClassname}`}>
            {label}
          </label>
          {children}
          {createElement(
            elementType,
            {
              required: required,
              placeholder: placeholder,
              className: `w-full min-h-fit h-full resize-none ${inputClassname}`,
              type: inputType,
              ref: composeRefs(forwardedInputRef, inputRef),
              onChange: (v) =>
                handleChange(v.currentTarget.value),
              onFocus: () => {
                onFocus && onFocus()
                setIsFocussed(true)
              },
              onBlur: () => {
                onBlur && onBlur()
                setIsFocussed(false)
              }
            },
            null
          )}
        </div>
        {statusInformation.error && isFilled && (
          <p
            style={{
              maxWidth: inputRef.current?.offsetWidth
            }}
            className="relative break-words text-red-500 text-md mt-2 ">
            {statusInformation.text}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
