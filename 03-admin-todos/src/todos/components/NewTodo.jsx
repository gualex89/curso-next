'use client';

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteCompletedTodos } from "../helpers/todos";
import { useRouter } from "next/navigation";
import { addTodo, deleteCompleted } from "../actions/todo-actions";


export const NewTodo = () => { 

  const router = useRouter();
  
  const [description, setDescription] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    console.log('form submited', description);

    // De esta manera puedo llamar a la accion haciendo un llamado a la api que se encuentra en los helpers
    //const createdTodo = createTodo(description);
    
    // De esta manera lo hacemos con Server Actions y no con Client Actions
    await addTodo(description);

    setDescription('');
    //router.refresh();
  }

  const deleteCompletedTodos = async () => {
  await deleteCompleted();




  }

  // De esta manera puedo llamar a la accion haciendo un llamado a la api que se encuentra en los helpers

  /* const deleteCompleted = async () => {
    const deleteCompleteTodos = await deleteCompletedTodos()

    router.refresh();
  } */

  return (
    <form onSubmit={ onSubmit }  className='flex w-full'>
      <input type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        // onClick={ () => deleteCompleted() }
        onClick={ deleteCompletedTodos }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Borrar Completados
      </button>


    </form>
  )
}