import { useState, createContext, useEffect } from 'react'
import { app } from './firebase'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'
import Login from './components/Login'
import toast, { Toaster } from 'react-hot-toast'
import Register from './components/Register'
import Update from './components/Update'
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import Verify from './components/Verify'
import Footer from './components/Footer'
import TasksList from './components/TasksList'

export const AppContext = createContext(null)

function App () {
  const [route, setRoute] = useState('home')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        email = window.prompt('Please provide your email for confirmation')
      }

      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn')
          setUser(result.user)
        })
    }

    const path = window.location.pathname.split('/')[1]
    if (path === 'auth') {
      setRoute('auth')
    }
  }, [])

  return (
    <AppContext.Provider value={{ setRoute, user, setUser }}>
      <Toaster />
      <Header />
      <main className='p-6'>
        {route === 'home' && <Home />}
        {route === 'login' && <Login />}
        {route === 'register' && <Register />}
        {route === 'verify' && <Verify />}
        {route === 'auth' && <Update />}
        {route === 'tasks' && <TasksList />}
      </main>
      <Footer />
    </AppContext.Provider>
  )
}

export default App
