import React from 'react'

export const Description = ({ product }) => {
  return (
    <div className='productDetail'>
      {
        product.details
      }
    </div>
  )
}
