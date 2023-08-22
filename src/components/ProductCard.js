import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({ producto }) => {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate(`/item/${producto.id}`)
  }
  return (
    <div className="productCard" onClick={navigateTo}>
      <img src={producto.img} alt={producto.alt} />
      <span>{producto.name}</span>
      <div>
        <b>{producto.price.toFixed(2)} </b>
      </div>
    </div>
  )
}
