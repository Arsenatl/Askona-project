import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div className='flex justify-center py-[50px]'>
        <div>

        <h2 className='text-[45px]'>Error 404</h2>
        <Link to={'/'} className='text-[30px] underline text-[blue]'>Bosh sahifaga qaytish</Link>
        </div>
    </div>
  )
}

export default Error404