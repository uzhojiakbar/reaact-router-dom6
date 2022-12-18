import React, { useState } from 'react'
import { Container } from './style'

const Students = () => {
  const [Students] = useState([
    {id:1,name:'Murodillayev Hojiakbar',job:'FrontEnd Developer'},
    {id:2,name:'Eshmat',job:'FrontEnd Developer'},
    {id:3,name:'Toshmat',job:'FrontEnd Developer'},
    {id:4,name:'Oshmat',job:'FrontEnd Developer'},
    {id:5,name:'Holmat',job:'FrontEnd Developer'},
    {id:6,name:'Boymat',job:'FrontEnd Developer'},
  ])
  const [Selected, setSelected] = useState({})
  return (
    <Container>
      <div>
      <h1>Students Page</h1>
        {Students.map((v)=>{
          return(
            <h1>
              {v.id} - {v.name} - <button onClick={()=>setSelected(v)}>Select</button>
            </h1>
          )
        })}
      </div>
      <div>
        <h1>Selected</h1>
            <h1>
          {Selected?.id}  {Selected?.name}
            </h1>
      </div>
    </Container>
  )
}

export default Students