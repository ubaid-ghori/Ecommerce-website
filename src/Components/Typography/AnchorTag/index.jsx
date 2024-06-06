import React from 'react'

const index = ({ className, children , href , onClick }) => {
  return (
    <div>
      <a href={href} onClick={onClick} className={`text-[#535B79] font-semibold cursor-pointer hover:text-[#96AE00] transition-all ease-in-out ${className} `}>{children}</a>
    </div>
  )
}

export default index
