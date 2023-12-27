import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import apiClient from '../api/client'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [update, setUpdate] = useState(null)

  const deleteToken = async (key) => {
    await SecureStore.deleteItemAsync(key);
  }

  const setToken = async (key, value) => {
    await deleteToken('rbim_token')
    await SecureStore.setItemAsync(key, value)
  }

  const getToken = async (key) => {
    let token = await SecureStore.getItemAsync(key)
    return token
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await getToken('rbim_token')
        const { data } = await apiClient.post('/mobile/user_logged', { token })
        if(data.success){
          setUser(data.data)
        }else{
          setUser(null)
        }
      } catch (error) {
        console.error("Error fetching logged user:", error);
      } finally {
        setUpdate(null)
      }
    }

    if(user === null || update !== null){
      fetchUser()
    }
  }, [user, update])

  return (
    <UserContext.Provider 
      value={{ 
        update, 
        setUpdate,
        setToken, 
        getToken, 
        deleteToken,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext);
};