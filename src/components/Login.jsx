import React, { useContext } from 'react'
import { getAuth } from 'firebase/auth'
import { signInGoogle } from '../firebase/utils'
import { FcGoogle } from 'react-icons/fc'
import { AppContext } from '../App'

const auth = getAuth()

const Login = () => {
  const { setUser, setRoute } = useContext(AppContext)

  const loginWithGoogle = async () => {
    const user = await signInGoogle(auth)
    setUser(user)
    setRoute('home')
  }

  return (
    <div>
      <button onClick={loginWithGoogle} className='flex items-center gap-2 bg-amber-400 text-white py-3 px-6 rounded-md'>
        <FcGoogle />Login with Google
      </button>
    </div>
  )
}

export default Login
