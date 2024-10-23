import React from 'react'
// import {Metadata} from next;


export const generateMetadata =({params})=> {
  return{
  title: `product ${params.productId}`
  }
}
const page = ({params}) => {
  return (
    <div>
      this is product {params.productId}
    </div>
  )
}

export default page
