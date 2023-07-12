import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ gretting }) => {
    return (
        <div className='container'>
            <span>
                {gretting}
            </span>
        </div>
    )
}
