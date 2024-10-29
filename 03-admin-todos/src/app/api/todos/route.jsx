import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

export async function GET( Request) { 

  const { searchParams } = new URL(Request.url)
  const skip = Number(searchParams.get('skip') ?? '0')
  const take = Number(searchParams.get('take') ?? '10')

  if (isNaN(take)) {
    return NextResponse.json({ error: 'take debe ser un numero' })
  }

  if (isNaN(skip)) {
    return NextResponse.json({ error: 'skip debe ser un numero' })
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip
  })

  return NextResponse.json({ todos })
  
}

//Yup es un validador
const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false)

})

export async function POST(Request) { 

  try {
    const body = await postSchema.validate(await Request.json());

    const todo = await prisma.todo.create({data:body})
  
    return NextResponse.json(todo)
    
  } catch (error) {
    return NextResponse.json(error,{ status: 400 })
    
  }

  
}