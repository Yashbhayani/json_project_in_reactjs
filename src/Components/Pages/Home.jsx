import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () =>{

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    loadUser()
  },[])

  const loadUser = async () =>{
    const result = axios.get("http://localhost:3000/users")
    // console.log(result, "YASH")
    setUsers((await result).data)
  }

  const DeleteUser = async (id) =>{
      await axios.delete(`http://localhost:3000/users/${id}`)
      loadUser( )
  }

  return (
    <div className='container'>
      <h1>User Data</h1>
      <table className="table">
        <thead>
          <tr className='bg-dark text-white'>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index)=>(
              <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{users.name}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>

                    <Link className="btn btn-light m-2"to={`/user/${users.id}`}><i className="fa fa-eye" aria-hidden="true"></i></Link>
                    <Link className="btn btn-primary m-2" to={`/user/edit/${users.id}`}> <i className="fa fa-pencil" aria-hidden="true"></i></Link>
                    <a className="btn btn-danger m-2" onClick={() => DeleteUser(users.id)}> <i className="fa fa-trash" aria-hidden="true"></i></a>
                  </td>
              </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Home
