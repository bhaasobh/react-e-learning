import React from 'react'

export default function MyList() {
    const items=["item1","item2","item3"]
  return (
    <div>
      <h1 className='title'>My List</h1>      
        {
            items.map((item)=>(
                <li>{item}</li>
            ))
        }
    </div>
  )
}
