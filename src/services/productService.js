

import { doc, getDoc, getFirestore, collection, getDocs, setDoc, query, where } from 'firebase/firestore'
import { productos } from '../seedData'

export const COLLECTION_PRODUCTS = "productos"

export const getProductById = async (id) => {
    const db = getFirestore()
    const itemRef = doc(db, COLLECTION_PRODUCTS, id)
    const snapshot = await getDoc(itemRef)

    if (!snapshot.exists()) return null

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}

export const getProducts = async () => {
    const db = getFirestore()

    const itemsColecction = collection(db, COLLECTION_PRODUCTS)

    const snapshot = await getDocs(itemsColecction)
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return products

}

export const initSeedData = async () => {
    const db = getFirestore()
    productos.map(async p => {
        await setDoc(doc(db, COLLECTION_PRODUCTS, p.id), p)
    })
}

export const getProductsByCategory = async (category) => {
    const db = getFirestore()
    const q = query(collection(db, COLLECTION_PRODUCTS), where("category", "==", category))

    const snapshot = await getDocs(q)
    if (!snapshot.size) return []

    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}