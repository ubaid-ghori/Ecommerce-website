import React from 'react'
// import '../../../styles'
const Heading= ({children,className}) => {
  return (
    <div>
      <h1 className={` font-md text-lg ${className}` } id='font'>{children}</h1>
    </div>
  )
}

export default Heading
