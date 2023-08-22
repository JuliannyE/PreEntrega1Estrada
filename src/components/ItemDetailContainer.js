import './ItemDetailContainer.css'
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useProduct } from '../hooks/useProduct'
import { ProductCard } from './ProductCard'
import { AddItemButton } from './itemDetail/AddItemButton'
import { ItemDetailQuantity } from './itemDetail/ItemDetailQuantity'
import { Description } from './itemDetail/Description'
import { useCartContext } from '../context/useCartContext'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const { product } = useProduct(id)
    const { addProduct } = useCartContext()
    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(1)
    const handleAddQuantity = (qty) => {
        setQuantity(prev => {
            const newQty = prev + qty
            if (newQty < 1) return 1
            return newQty
        })
    }

    const handleAddCart = () => {
        addProduct({ ...product, quantity })
        setTimeout(() => {
            alert("Agregado al carrito, rediriendo al carrito")
            navigate("/cart")
        }, 1000)
    }

    if (!product) {
        return (
            <div className='itemDetails'>
                <h1>
                    Cargando...
                </h1>
            </div>
        )
    }

    return (
        <div className='itemDetails'><div className='categoryName'>{product.name} </div>
            <div className='productContainer'>
                <ProductCard producto={product} />
            </div>
            <Description product={product} />
            <div className='buttonCart' >
                <ItemDetailQuantity quantity={quantity} handleAddQuantity={handleAddQuantity} />
                <AddItemButton onClick={handleAddCart} />
            </div>
        </div>
    )
}
