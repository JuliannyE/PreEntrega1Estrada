import { useEffect, useState } from 'react'
import { productos } from "../productos";


export const useProduct = (productId ) => {
    const [product, setProduct] = useState(productos[0])

    useEffect(() => {
        const filter = productos.find(p => p.id == productId)
        
        setProduct(filter)
    }, [productId])

    return {
        product
    }
}
