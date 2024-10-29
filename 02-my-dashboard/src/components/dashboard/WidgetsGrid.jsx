'use client'
import React from 'react'
import { SimpleWidget } from '..'
import { useSelector } from 'react-redux'
import { IoCartOutline } from 'react-icons/io5'



export const WidgetsGrid = () => {

  const count = useSelector((state)=> state.counterReducer.count)

  

  return (
    <div className="flex flex-wrap p-2 justify-center">
        <SimpleWidget 
          title={count} 
          label="Contador" 
          href="/dashboard/counter" 
          subTitle={'Producto en el carrito de compras'}
          icon = { <IoCartOutline size={50} className="text-blue-600" /> }
        />
        
        
      </div>
  )
}
