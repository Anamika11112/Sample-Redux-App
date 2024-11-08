import React from 'react'
import UserForm from '../UserForm'
import './index.css'
function Modal() {
  return (
    <div>
        <div className='modal_container'>
         <UserForm/>
       </div>
        <div className="overlay"></div>
    </div>
  )
}
export default Modal