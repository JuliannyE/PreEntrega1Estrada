import React from 'react'

export const AddItemButton = ({onClick}) => {
  return (
    <div style={{ marginTop: "10px", backgroundColor: "#ededed", borderRadius: "10", alignSelf: "center" }}>
      <button style={{ width: "100%" }} onClick={onClick} >
        Agregar al carrito
      </button>
    </div >
  )
}
