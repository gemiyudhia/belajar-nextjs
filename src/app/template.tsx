import React, { ReactNode } from 'react'

type TemplateProps = {
  children: ReactNode
}

const Template = ({children}: TemplateProps) => {
  return (
    <div>
      <h1>Hello World</h1>
      {children}
    </div>
  )
}

export default Template
