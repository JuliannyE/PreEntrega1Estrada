import { useEffect, useState } from 'react'
import { getProductsByCategory } from '../services/productService'


export const useCategory = (category) => {
    const [productsByCategory, setProductsByCategory] = useState([])

    const buscarProductos = async () => {
        const productosFiltrados = await getProductsByCategory(category)
        setProductsByCategory(productosFiltrados)
    }

    useEffect(() => {
        buscarProductos()
    }, [category])

    return {
        productsByCategory
    }
}
