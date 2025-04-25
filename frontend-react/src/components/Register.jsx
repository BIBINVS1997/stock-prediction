import React, { use, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
const Register = () => {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[errors,setErrors]=useState({})
  const[success,setSuccess]=useState(false)
  const[loading,setLoading]=useState(false)
  const handleRegistration=async(e)=>{
    e.preventDefault()
    setLoading(true)
    const userData={username,email,password}
    try{
      const response=await axios.post('http://127.0.0.1:8000/register/',userData)
      console.log(response.data)
      console.log('registration complete')
      setErrors({})
      setSuccess(true)
      }catch(error){
      setErrors(error.response.data)
       console.error(error.response.data)
       setSuccess(false)
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
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input type="text" className='form-control' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <small>{errors.username&&<div className='text-danger'>{errors.username}</div>}</small>
              </div>
              <div className="mb-3">
                 <input type="email" className='form-control mb-3' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                 <small>{errors.email&&<div className='text-danger'>{errors.email}</div>}</small>

              </div>
              <div className="mb-3">
                 <input type="password" className='form-control mb-3' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
              {success? (<div className='alert alert-success'>Registration is Success</div>):""}
              {loading ? (<button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin/>Please Wait</button>)
                 :(<button type='submit' className='btn btn-info d-block mx-auto'>Register</button>)}
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register