export const updateTodo = async (id, complete) => {

  const body = { complete }


// Se llama con una ruta relativa porque va a ser llamdado del lado del cliente, si fuese del lado del servidor tendria que llamarse con una ruta absoluta
  const todo = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'

    }
  }).then ((res) => res.json())

  console.log(todo)

  return todo
}
export const createTodo = async (description ) => {

  const body = { description }


// Se llama con una ruta relativa porque va a ser llamdado del lado del cliente, si fuese del lado del servidor tendria que llamarse con una ruta absoluta
  const todo = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'

    }
  }).then ((res) => res.json())

  console.log(todo)

  return todo
}
export const deleteCompletedTodos = async ( ) => {

  


// Se llama con una ruta relativa porque va a ser llamdado del lado del cliente, si fuese del lado del servidor tendria que llamarse con una ruta absoluta
  const deletes = await fetch('/api/todos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'

    }
  }).then ((res) => res.json())

  

  return deletes
}