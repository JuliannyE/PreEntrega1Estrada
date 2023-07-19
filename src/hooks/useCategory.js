import { useEffect, useState } from 'react'
import { productos } from "../productos";


export const useCategory = (category) => {
    const [productosByCategory, setProductosByCategory] = useState(productos)


    const buscarProductos = () => {
        const productosFiltrados = productos.filter(p => p.category === category)
        setProductosByCategory(productosFiltrados)
    }

    useEffect(() => {

        buscarProductos()
    }, [category])

    return {
        productosByCategory
    }

}
