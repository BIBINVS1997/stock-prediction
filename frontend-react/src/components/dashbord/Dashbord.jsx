import axios from 'axios'
import React, { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'
const Dashbord = () => {
    useEffect(()=>{
        const protectedData=async()=>{
              try{
                const response=await axiosInstance.get('/protected/')
                console.log('success',response.data)
              }catch(error){
                console.error(error)
              }
            }
            protectedData()
    },[])
  return (
    <div className='text-light'>Dashbord</div>
  )
}

export default Dashbord