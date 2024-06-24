import React from 'react'
import Button from './Button'
export default function Modal({title,text,loginevent,cancelevent}) {
  return (
    <div className='modal'>
      <div className='modal-content fadeIn-2ms'>
        <h1 className='mb-1'>{title}</h1>
        <p className="mb-1">
          {text?text:"modal contact goes here"}
        </p>
        <div className="d-flex space-between">
        <Button text={"Login"} classes={"btn-primary"} onClick={loginevent}/>
        <Button text={"Close"} onClick={cancelevent} />
        </div>
      </div>
    </div>
  )
}
