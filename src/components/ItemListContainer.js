import './ItemListContainer.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categorias, productos } from '../productos'

const categoryProduct = categorias.map(category => productos.find(p => p.category === category))

export const ItemListContainer = () => {
    const navigate = useNavigate()
    const navigateTo = (ruta) => {
        navigate(`/category/${ruta}`)
    }
    return (
        <div className='container'>
            {
                categoryProduct.map((p, i) => (
                    <div key={i} className="category" onClick={() => navigateTo(p.category)}>
                        <img src={p.img}
                            alt={p.alt} />
                        <span className='categoryName'>{p.category}</span>
                    </div>)
                )
            }
        </div>
    )
}
