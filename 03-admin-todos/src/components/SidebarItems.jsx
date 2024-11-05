'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { IoCalendarOutline, IoCheckboxOutline, IoListOutline  } from 'react-icons/io5'


export const SidebarItems = ({icon, path, title}) => {

    const pathName = usePathname()

  return (
    <>
        <li>
            <Link href={path} className= {`relative px-4 py-3 flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r hover:from-sky-600 hover:text-white ${path === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''} `}>
            {icon}
            <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
        
    </>
  )
}
