'use server'

import { revalidatePath } from "next/cache"


export const sleep = async (ms = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const toggleTodo = async (id, complete) => {

  await sleep()
  const todo = await prisma.todo.findFirst({
    where: { id: id }
  })
  if (!todo) {
    throw `Todo con id ${id} no encontrado`
  }
  
  const updatedTodo = await prisma.todo.update({
    where: { id: id },
    data: { complete: complete}
  })
  
  revalidatePath('/dashboard/server-todos')


  return updatedTodo

}

export const addTodo = async (description) => {
  try {
   

    const todo = await prisma.todo.create({data: {description}})
    revalidatePath('/dashboard/server-todos')

    return todo
    
  } catch (error) {
    return {
      message: 'Error al agregar el todo',
      error
    }
    
  }
}

export const deleteCompleted = async () => {

  try {
    const deleteTodos = await prisma.todo.deleteMany({

      where: { complete: true },
      
    })
    revalidatePath('/dashboard/server-todos')
    return deleteTodos
    
  } catch (error) {
    return {
      message: 'Error al eliminar el todo',
      error
    }
    
  }

}
