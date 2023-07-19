import './productos.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { useCategory } from '../hooks/useCategory'

export const Category = () => {
  const { categoryId } = useParams()
  const { productosByCategory } = useCategory(categoryId)

  return (
    <div >
      <div className='categoryName'>Categoria {categoryId} </div>
      <div className='productContainer'>
        {
          productosByCategory.map((p, i) => <ProductCard key={i} producto={p} />)
        }
      </div>
    </div>
  )
}
