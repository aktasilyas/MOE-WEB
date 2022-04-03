import React, { useEffect } from 'react'
import './style.css'
const Sidebar=()=> {

  return (
    <div className='flex flex-col  h-full'>
        <nav className='mb-4 mt-3'>
        <a href="" className='navlink'>Anasayfa</a>
        <a href="" className='navlink'>Bildirimler</a>
        <a href="" className='navlink'>Yönetim</a>
        <a href="" className='navlink'>Kişiler</a>
        </nav>
        
    </div>
  )
}
export default Sidebar;