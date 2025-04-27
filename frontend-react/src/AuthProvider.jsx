import { createContext,useState } from 'react'

const AuthContext=createContext()

const AuthProvider = ({children}) => {
   
        const[isLoggedin,setIsloggedin]=useState(
            !!localStorage.getItem('accessToken')
        )
    
    
  return (
    <AuthContext.Provider value={{isLoggedin,setIsloggedin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}