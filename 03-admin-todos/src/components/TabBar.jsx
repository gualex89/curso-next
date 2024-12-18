'use client'

import { useState } from "react"
//importando esto podemos despues establecer las cookies, solo funciona en el lado del cliente
import { setCookie } from "cookies-next"

export const TabBar = ({tabOptions = [1,2,3,4], currentTab = 1}) => {

    const [selected, setSelected] = useState(currentTab)

    const onTabSelected = (tab) => {
        setSelected(tab);

        //seteamos la cookie
        setCookie('selectedTab', tab.toString())
    }

    return (
        <div className={`
        grid w-full  space-x-2 rounded-xl bg-gray-200 p-2 
        ${ 'grid-cols-' + tabOptions.length }`}>
        {
          tabOptions.map(tab => (
                <div key={tab}>
                    <input 
                        type="radio"  
                        id={tab.toString()} 
                        className="peer hidden" 
                        checked={selected === tab}
                        onChange={() =>{}}
                    />
                    <label
                    onClick={() => onTabSelected(tab)} 
                    className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                        {tab}	
                    </label>
                </div>

            ))
        }
        
  
       
      </div>
    )
  }