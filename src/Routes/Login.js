import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
const navigate=useNavigate()

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      email: email,
      password:password
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://127.0.0.1:5000/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setToken(result[1].token)
        navigate("/home")

      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
