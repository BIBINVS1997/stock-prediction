import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {isLoggedin}=useContext(AuthContext)
  return !isLoggedin?(
    children
  ):<Navigate to='/dashbord'/>
}

export default PublicRoute