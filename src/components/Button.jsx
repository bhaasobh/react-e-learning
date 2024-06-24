import React from 'react'

export default function Button({classes,text,type,style,onClick,icon}) {
    const alertMissingHundler =  ()=>window.alert("Add event hundler to the button") ;
  return (
   <button onClick={onClick?onClick:alertMissingHundler} type = {type} className={`btn ${classes}`} style={style}>
   
   <div className='d-lex'>
    {icon}
    {text ? text : "Click"}
   </div>
   </button>
  
  )
}
