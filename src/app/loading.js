import React from 'react'
import Loader from '../components/Loading/Loader'

function loading() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Loader />
    </div>
  )
}

export default loading
