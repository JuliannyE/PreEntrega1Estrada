import { doc, getFirestore, setDoc, } from 'firebase/firestore'

const COLLECTION_ORDERS = 'ordenes'
export const createOrderInServer = async (payload) => {
    const db = getFirestore()
    const id = new Date().getTime()
    await setDoc(doc(db, COLLECTION_ORDERS, `order_${id}`), payload)
}