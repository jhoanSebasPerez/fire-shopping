import React, { useContext } from 'react'
import { AiFillHome, AiOutlineOrderedList } from 'react-icons/ai'
import { AppContext } from '../App'

const Footer = () => {
  const { setRoute } = useContext(AppContext)

  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-amber-300 py-5 flex justify-around'>
      <div
        className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200 transition'
        onClick={() => setRoute('home')}
      >
        <AiFillHome className='w-5 h-5' />
      </div>

      <div
        className='bg-white p-3 rounded-full cursor-pointer hover:bg-gray-200 transition'
        onClick={() => setRoute('tasks')}
      >
        <AiOutlineOrderedList className='w-5 h-5' />
      </div>
    </footer>
  )
}

export default Footer
