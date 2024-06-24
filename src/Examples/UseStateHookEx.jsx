import {React,useState} from 'react'

export default function UseStateHookEx() {
    const [count,setCount] = useState(0);
  return (
    <div>
      <h1>UseStateHookEx</h1>
      <button className='btn' onClick={()=>setCount(count + 1)}>+</button>
      <span>your number is {count}</span>
      <button className='btn' onClick={()=>setCount(count - 1)}>-</button>
    </div>
  )
}
