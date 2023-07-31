import './ItemDetailContainer.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { ProductCard } from './ProductCard'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const { product } = useProduct(id)
    const { nombre } = product

    const handleAddCart = () => {
        alert("Agregado al carrito")
    }

    return (
        <div className='itemDetails'>
            <div className='categoryName'>{nombre} </div>
            <div className='productContainer'>
                <ProductCard producto={product} />
            </div>
            <div className='productDetail'>
                {
                    product.detalles
                }
            </div>
            <div className='buttonCart' onClick={handleAddCart}>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}
