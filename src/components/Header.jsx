import React, { useContext } from 'react'
import { AiFillFire } from 'react-icons/ai'
import { AppContext } from '../App'
import { BiLogOut } from 'react-icons/bi'
import { logout } from '../firebase/utils'
import { getAuth } from 'firebase/auth'

const Header = () => {
  const { setRoute, user, setUser } = useContext(AppContext)

  const signOut = async () => {
    const auth = getAuth()
    await logout(auth)
    setUser(null)
  }

  return (
    <header className='h-20 flex items-center justify-between shadow-lg p-5 rounded-md'>
      <div className='flex items-center gap-2' onClick={() => setRoute('home')}>
        <AiFillFire className='w-8 h-8' />
        <p className='text-amber-700 font-semibold'>FireShopping</p>
      </div>

      {user
        ? (
          <div className='flex items-center gap-2'>
            <p>{user.displayName}</p>
            <button className='bg-amber-200 py-2 px-4 rounded-md' onClick={signOut}><BiLogOut /></button>
          </div>
          )
        : (
          <div className='flex align-middle gap-2'>
            <button
              className='bg-amber-600 py-3 px-6 rounded-full hover:bg-amber-500 transition text-white'
              onClick={() => setRoute('login')}
            >
              Login
            </button>
            <button
              className='bg-gray-600 py-3 px-6 rounded-full hover:bg-gray-500 transition text-white'
              onClick={() => setRoute('register')}
            >
              Register
            </button>
          </div>
          )}
    </header>
  )
}

export default Header
