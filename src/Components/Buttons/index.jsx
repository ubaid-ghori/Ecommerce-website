import React from 'react'
// import Style from '../../styles'
const Button = ({children,className,onClick}) => {
  return (
    <div>
      <button className={`p-2 rounded-full text-white w-40 h-12 font-semibold ${className}`} id='btn'>{children}</button>
    </div>
  )
}

export default Button
