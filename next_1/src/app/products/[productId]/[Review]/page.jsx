import React from 'react'

const page = ({params}) => {
  return (
    <div>
      this is the review {params.Review} of product {params.productId}
    </div>
  )
}

export default page
