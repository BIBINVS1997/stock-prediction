import React from 'react'
import Button from './Button'
const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
           <h1 className='text-light'>Stock Prediction Portal</h1>
           <p className='text-light lead'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
           <Button text='Login' class='btn-outline-info'/>
        </div>
      </div>
    </>
  )
}

export default Main