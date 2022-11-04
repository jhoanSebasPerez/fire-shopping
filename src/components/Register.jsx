import React, { useState, useContext } from 'react'
import { register } from '../firebase/utils'
import { getAuth } from 'firebase/auth'
import { AppContext } from '../App'

const auth = getAuth()

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setRoute } = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    register(auth, email, password)
    setRoute('verify')
  }

  return (
    <div>
      <h1 className='text-xl font-semibold'>Create a new account</h1>
      <form onSubmit={handleSubmit} className='flex flex-col my-5'>
        <div className='flex gap-2 justify-between my-4'>
          <label htmlFor='email' className='py-2 px-4 w-20'>Email</label>
          <input
            id='email'
            className='shadow-sm border-2 py-2 px-3 rounded-md w-80'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='flex gap-2 justify-between my-4'>
          <label htmlFor='password' className='py-2 px-4 w-20'>Password</label>
          <input
            id='password'
            className='shadow-sm border-2 py-2 px-3 rounded-md w-80'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-orange-500 text-white py-3 rounded-full hover:bg-orange-300 transition' type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Register
