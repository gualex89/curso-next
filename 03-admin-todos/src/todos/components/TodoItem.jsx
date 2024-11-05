'use client'

import { startTransition, useOptimistic } from 'react'
import { IoCheckbox, IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import styles from './TodoItem.module.css'

export const TodoItem = ({todo, toggleTodo}) => {
  
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue) => ({...state, complete: newCompleteValue})
  )


  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete) )
      
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)

    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete) )
    }
    
  }

  return (
    <div className={ todoOptimistic.complete ?  styles.todoDone : styles.todoPending}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
        // onClick={() => toggleTodo(todoOptimistic.id, !todoOptimistic.complete)} 
        onClick={onToggleTodo} 
        className={`
          flex p-2 rounded-md cursor-pointer
          hover:bg-opacity-60
          ${ todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'  }
         
          `}>
            {
              todoOptimistic.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />
            }
            

        </div>
        <div className='text-center sm:text-left'>
          {todoOptimistic.description}
        </div>
      </div>


    </div>
  )
}


// Desde aqui el codigo sin usar el useOptimistic, El useOptimistic se usa solamente para hacer cambios en el componente, cuando tarda en hacer el llamado a la api. Entonces como son procesos que casi nunca fallan pero que pueden tardar mucho tiempo para hacerse, se usa el useOptimistic para hacerlos mas rapidos y no tener que esperar tanto el llamado a la api. Lo siguiente es el mismo codigo sin useOptimistic.

/* import { IoCheckbox, IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import styles from './TodoItem.module.css'

export const TodoItem = ({todo, toggleTodo}) => {
  return (
    <div className={ todo.complete ?  styles.todoDone : styles.todoPending}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
        onClick={() => toggleTodo(todo.id, !todo.complete)} 
        className={`
          flex p-2 rounded-md cursor-pointer
          hover:bg-opacity-60
          ${ todo.complete ? 'bg-blue-100' : 'bg-red-100'  }
         
          `}>
            {
              todo.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />
            }
            

        </div>
        <div className='text-center sm:text-left'>
          {todo.description}
        </div>
      </div>


    </div>
  )
}
 */