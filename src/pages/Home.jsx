import React from 'react'
import Navbar from '../components/Navbar'
import Books from '../components/Books'

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <Books/>
    </div>
  )
}
