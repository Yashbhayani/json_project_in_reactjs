import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const AddUsers = () =>{
  const navigate = useNavigate()
  //  const [user, setUsers] = useState([{
  //     name : '',
  //     username : '',
  //     email : ''
  //  }]) 
   let user = {} 
   const [name, setName] = useState('') 
   const [username, setUsername] = useState('')  
   const [email, setEmail] = useState('')


  const hendleSubmit = async e => {
      e.preventDefault();
      
      user = {
        name,
        username,
        email
      }

       await axios.post("http://localhost:3000/users", user)
       user = undefined
       setName('')
       setUsername('')
       setEmail('')
       navigate("/")
  } 

  return (
    <div className='container'>
      <h1>Add User</h1>
      <div>
          <form onSubmit={e => hendleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default AddUsers
