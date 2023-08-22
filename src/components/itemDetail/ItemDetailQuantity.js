import React from 'react'

export const ItemDetailQuantity = (
  {
    quantity,
    handleAddQuantity
  }
) => {



  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      border: "1px solid #ededed"
    }}>
      <button onClick={() => handleAddQuantity(-1)}> - </button>
      <div style={{ width: "200px", textAlign: "center" }}>{quantity}</div>
      <button onClick={() => handleAddQuantity(1)}> + </button>
    </div>
  )
}
