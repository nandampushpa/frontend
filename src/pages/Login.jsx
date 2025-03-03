import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../App.css'

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          const res = await axios.post("http://localhost:5000/login", { email, password });
          localStorage.setItem("username", res.data.username);
          setIsLoggedIn(true);
          navigate("/home");
        } catch (error) {
          alert("Invalid Credentials");
        }
    }
    return (
        <>
            <div className="continer my-5 p-5" style={{
                'width': "500px",
                'border': '2px solid yellow',
                'borderRadius': '10px',
                'margin': '500px',



            }}>
                <h2 className='text-center'>Login</h2>
                <form style={{
                    width: "420px",
                    margin: 'auto'
                }} className='my-3 p-3'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1"  className="form-label">Email </label>
                        <input type="email"placeholder="email"  onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="continer d-grid col-5">
                        <button type="submit" onClick={handleLogin} className="btn btn-primary my-3">Login</button>
                    </div>

                </form>

            </div>

        </>
    )
}

export default Login
