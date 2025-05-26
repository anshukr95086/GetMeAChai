import React from 'react'

const Button = ({children}) => {
  return (
    <div>
      <button className='bg-white text-black font-semibold text-md px-5 py-2 rounded-md'>{children}</button>
    </div>
  )
}

export default Button
