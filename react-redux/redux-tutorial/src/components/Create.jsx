import React from 'react'

const Create = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='name' />
        <input type="text" placeholder='email' />
        <input type="text" placeholder='age' />
        <div>
        <input type="radio" name='gender' value='male'   />
        <label htmlFor="">male</label>
        <input type="radio" name='gender' placeholder='female'   />
        <label htmlFor="">female</label>
        </div>
      </form>
    </div>
  )
}

export default Create
