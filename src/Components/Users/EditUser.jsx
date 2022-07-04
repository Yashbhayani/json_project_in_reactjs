import React, { useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from 'axios'

const EditUser = () =>{

    const history = useNavigate()
    const { id } = useParams()

    let user = {}

        const [name, setName] = useState('') 
        const [username, setUsername] = useState('')  
        const [email, setEmail] = useState('')
     
        useEffect(() => {
            loadUser();
        },[])

        const loadUser = async () =>{
            const result = await axios.get(`http://localhost:3000/users/${id}`)
            setName(result.data.name)
            setUsername(result.data.username)
            setEmail(result.data.email)
        }
     
       const hendleSubmit = async e => {
        debugger
           e.preventDefault();
     
          user = {
             name,
             username,
             email
           }
            await axios.put(`http://localhost:3000/users/${id}`, user)
            user = undefined
            history("/")
       } 

  return (
    <div className='container'>
      <h1>Edit User</h1>
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
            <button type="submit" className="btn btn-warning">Update</button>
          </form>
      </div>
    </div>
  )
}

export default EditUser
