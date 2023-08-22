import './cart.css'
import React from 'react'
import { useCartContext } from '../context/useCartContext'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cart, createOrder, removeCartProduct } = useCartContext()
  const navigate = useNavigate()
  const handleCreate = async () => {
    const resp = await createOrder()
    if (resp.hasError) {
      alert("Ha ocurrido un error")
    } else {
      alert("Orden creada satisfactoriamente, redirigiendo al home")
      navigate("/")
    }
  }

  return (
    <div className='cart'>

      <h1>Carrito de compras</h1>

      <ul>


        {
          cart.map(p => <li key={p.id} className='cart-item'>
            <img src={p.img} width="100px" />
            <div>
              {p.name}
            </div>
            <div>
              {
                p.finalPrice
              } $
            </div>
            <div>
              Qty:
              {
                p.quantity
              }
            </div>
            <button onClick={() => removeCartProduct(p)}>
              X
            </button>
          </li>)
        }
      </ul>

      <button onClick={handleCreate}>Crear orden de compra</button>
    </div>
  )
}
