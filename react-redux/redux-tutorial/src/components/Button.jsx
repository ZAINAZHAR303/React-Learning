import React from 'react'

const Button = ({content, onclickhandler}) => {
  return (
    <button className='bg-green-400 w-[100px]' onClick={onclickhandler}>{content}</button>
  )
}

export default Button
