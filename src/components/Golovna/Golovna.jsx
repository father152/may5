import React from 'react'
import './golovna.css'
import photo from "../Image/chapel-7956274_1920.jpg"



function Golovna() {
  return (
    <div className='golovna'>
    <div className='leftpart'>11111</div>
    <div className='centralpart'>
    <div className='container-2'>
    <h1>WELCOME !</h1>
    <img src={photo} alt="logo"/>
    </div>
   
    
    </div>
    <div className='rightpart'>333333</div>
    </div>
  )
}
export {Golovna}