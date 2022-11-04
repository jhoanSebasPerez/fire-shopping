import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '.'

const collectionName = 'tasks'

export const createTask = async (task) => {
  const newTask = await addDoc(collection(db, collectionName), task)
  return newTask
}

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, collectionName))
  const tasks = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
  return tasks
}

export const updateTask = async (task) => {
  const taskRef = doc(db, collectionName, task.id)
  await updateDoc(taskRef, task)
}

export const deleteTask = async (task) => {
  await deleteDoc(doc(db, collectionName, task.id))
}
