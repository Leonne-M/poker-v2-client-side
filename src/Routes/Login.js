import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({ email, password });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://127.0.0.1:5000/login",
        requestOptions
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      console.log(result); // Assuming successful login, handle token storage or redirection here
    } catch (error) {
      console.error("Login error:", error.message);
      setMessage(error.message); // Display error message
    }
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
