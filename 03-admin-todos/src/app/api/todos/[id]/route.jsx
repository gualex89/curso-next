import { NextResponse, NextRequest } from 'next/server'

export async function GET(Request,  {params} ) { 

  console.log(params.id)

  const todo = await prisma.todo.findFirst({
    where: { id: params.id }
  })
  if (!todo) {
    return NextResponse.json({ error: 'todo with id ' + params.id + ' not found', status: 404 })
  }

  return NextResponse.json( todo )
}
export async function PUT(Request,  {params} ) { 

  

  const todo = await prisma.todo.findFirst({
    where: { id: params.id }
  })
  if (!todo) {
    return NextResponse.json({ error: 'todo with id ' + params.id + ' not found', status: 404 })
  }

  const body = await Request.json()

  const updatedTodo = await prisma.todo.update({
    where: { id: params.id },
    data: {...body}
  })

  return NextResponse.json( todo )
}