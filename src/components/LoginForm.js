import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //username | password => chatengine=>give message
    const authObject = {
      "Project-ID": "cbd485ca-d2d7-409a-b5b3-769c2e15e707",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      //logged in
      localStorage.setItem("username", username);
        localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      //try again
        setError("Incorrect credentials")
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 ClassName="title">Elven Soul Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            value={password}
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Let's Chat</span>
            </button>
                  </div>
                  <h2 className="error">{error }</h2>
        </form>
      </div>
    </div>
  );
}
