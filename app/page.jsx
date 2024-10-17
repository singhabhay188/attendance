"use client";
import { useState } from "react";
import "./page.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className="login-p">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <FaLock className="icon" />
            </div>
            <button type="submit">Login</button>
            <div className="forgot">
              <a href="#">Forgot Password?</a>
            </div>
        </form>
    </div>
  )
}


