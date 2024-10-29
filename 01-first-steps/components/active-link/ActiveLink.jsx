'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import style from './ActiveLink.module.css'

export const ActiveLink = ({navItem}) => {

  const path =usePathname();

  return (
    <>
      
      <Link key={navItem.path} className={`${style.link} ${ (path === navItem.path) &&style['active-link']} `} href={navItem.path}>{navItem.text}</Link>
      
    </>
    )
}
