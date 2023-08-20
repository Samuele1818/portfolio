'use client'
import React, { FC, useLayoutEffect } from 'react'
import Prism from 'prismjs'
import './vscode-dark-plus.css'

type Props = {
 code: string
 language: string
}

const CodeBlock: FC<Props> = ({
 code,
 language,
}) => {
 useLayoutEffect(() => {
  Prism.highlightAll()
 })

 return (
  <pre className='max-w-full'>
   <code
    className={`!whitespace-break-spaces language-${language}`}>
    {code}
   </code>
  </pre>
 )
}

export default CodeBlock
