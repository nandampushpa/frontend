import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className="nav bg-dark p-4">
        <div className="left">
            <h2>MAKING Recipes</h2>
        </div>
        <div className="right">
            <Link to={"/Home"}className="btn btn-light mx-2">Home</Link>
            <Link to={"/Login"} className="btn btn-primary">Login</Link>
            <Link to={"/Register"} className="btn btn-warning mx-2">Register</Link> 
            <Link to={"/Add"} className="btn btn-info mx-2">Add</Link>
           
            <Link to={"/Save"}className="btn btn-danger mx-2">Save</Link>
        </div>
    </div>

    
    </>
  )
}

export default Navbar
