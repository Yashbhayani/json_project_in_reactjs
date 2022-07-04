import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserView = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
      });
      const { id } = useParams();

      useEffect(() => {
        loadUser();
      }, []);
      
      const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
      };

  return (
    <div>
        <div className="container py-4">
        <Link className="btn btn-primary" to="/">
            back to Home
        </Link>
        <h1 className="display-4">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
            <li className="list-group-item">Name :-  {user.name}</li>
            <li className="list-group-item">Username:-  {user.username}</li>
            <li className="list-group-item">Email:-  {user.email}</li>
        </ul>
        </div>
    </div>
  )
}

export default UserView
