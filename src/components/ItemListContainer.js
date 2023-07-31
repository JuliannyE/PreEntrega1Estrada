import './ItemListContainer.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categorias, productos } from '../productos'

const categoryProduct = categorias.map(category => productos.find(p => p.category === category))

export const ItemListContainer = () => {
    const navigate = useNavigate()
    const navigateTo = (ruta) => {
        console.log("navegando...")
        navigate(`/category/${ruta}`)
    }
    return (
        <div className='itemListContainer'>

            <div className='itemListContainerTitle'>Elige una categoria</div>
            <div className='container'>
                {
                    categoryProduct.map((p, i) => (
                        <div key={i} className="category" onClick={() => navigateTo(p.category)}>
                            <img src={p.img} alt={p.alt} />
                            <span className='categoryName'>{p.category}</span>
                        </div>)
                    )
                }
            </div>
        </div>
    )
}
