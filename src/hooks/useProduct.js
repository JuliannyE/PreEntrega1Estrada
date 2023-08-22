import { useEffect, useState } from 'react'
import { getProductById } from '../services/productService';

export const useProduct = (productId) => {
    const [product, setProduct] = useState()

    const findProduct = async () => {
        const filter = await getProductById(productId)
        setProduct(filter)
    }

    useEffect(() => {
       findProduct()
    }, [productId])

    return {
        product
    }
}
