'use client'
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const getApiCounter = async () => {
    const data = await fetch('/api/counter')
        .then((response) => response.json())

    
    return data

    
}

export const CartCounter = ({value}) => {

    const count = useSelector((state)=> state.counterReducer.count)


    const dispatch = useDispatch()

    const handleIncrement = () => dispatch(addOne())
    const handleDecrement = () => dispatch(substractOne())

    /* useEffect(() => {
      dispatch(initCounterState(value))
    
      
    }, [dispatch, value]) */

    // Este useEffect siguiente hace los mismo que el anterior, el anterior usa el store y el siguiente hace una RESTful Api //TODO: Ojo con esto 

    useEffect(() => {
      getApiCounter()
        .then(({count}) => dispatch(initCounterState(count)))
    
     
    }, [dispatch])
    
    

  
    

    return (
        <>
            <span>Productos en el carrito</span>
            <span className="text-9xl"> {count} </span>

            <div className="flex">
                <button
                    onClick={handleIncrement}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button
                    onClick={handleDecrement}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}
