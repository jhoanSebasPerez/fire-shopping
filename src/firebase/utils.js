import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail
} from 'firebase/auth'
import toast from 'react-hot-toast'

const provider = new GoogleAuthProvider()

/**
 * Launches pop up to login with Google account
 * @param {object} auth -> necesary to login with Google
 * @return {object} token and info user
 */
export const signInGoogle = async (auth) => {
  try {
    const { user } = await signInWithPopup(auth, provider)
    toast('Login successful')
    return user
  } catch (error) {
    throw new Error(`Error code: ${error.code} -> ${error.message}`)
  }
}

export const logout = async (auth) => {
  try {
    await signOut(auth)
    toast('Logout successful')
  } catch (error) {
    throw new Error(error.message)
  }
}

const actionCodeSettings = {
  url: 'http://localhost:5173/',
  handleCodeInApp: true
}

export const register = async (auth, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => window.localStorage.setItem('emailForSignIn', email))
  } catch (error) {
    console.error(error.message)
  }
}
