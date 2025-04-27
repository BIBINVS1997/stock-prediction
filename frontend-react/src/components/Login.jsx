import React, { useContext } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
const Login = () => {
   const[username,setUsername]=useState('')
   const[password,setPassword]=useState('')
   const[loading,setLoading]=useState(false)
   const navigate=useNavigate()
   const[errors,setErrors]=useState('')
   const {isLoggedin,setIsloggedin} =useContext(AuthContext)
   const handeleLogin=async(e)=>{
    e.preventDefault()
        
    setLoading(true)
    const userData={username,password}
    try{
      const response=await axios.post('http://127.0.0.1:8000/api/token/',userData)
      console.log(response.data)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      console.log('Login is complete')
      setIsloggedin(true)
      navigate('/')
      setErrors({})
      // setSuccess(true)
      }catch(error){
      setErrors('Invalid Credentials')
      //  console.error(error.response.data)
      //  setSuccess(false)
    }finally{
      setLoading(false)
    }
    // console.log(userData)
  
   }
  return (
       <>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className="col-md-6 bg-light-dark p-5 rounded">
                <h3 className='text-light text-center mb-4'>Create An Account</h3>
                <form onSubmit={handeleLogin} >
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                    
                  </div>
                 
                  <div className="mb-3">
                     <input type="password" className='form-control mb-3' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  {errors&&<div className='text-danger mb-3'>{errors}</div>}
                  {loading ? (<button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Login Please Wait</button>)
                     :(<button type='submit' className='btn btn-info d-block mx-auto'>Login</button>)}
                  
                </form>
              </div>
            </div>
          </div>
        </>
  )
}

export default Login