'use client'
import React from 'react'
import { TodoItem } from '.'
import { updateTodo } from '../helpers/todos'
import { useRouter } from 'next/navigation'
import { toggleTodo } from '../actions/todo-actions'

export const TodosGrid = ({todos}) => {

  
  const router = useRouter(); //useRouter se debe importar de next/navigation OJO no de next/router
  /* const toggleTodo = async (id, complete) => {

    const updatedTodo = await updateTodo(id, complete)
    
    router.refresh()
  } */

 
 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      }
    </div>
  )
}
