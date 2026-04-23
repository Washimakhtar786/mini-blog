import { useState } from "react";

function Login() {
  const [msg, setMsg] = useState("");

  const handleLogin = () => {
    localStorage.setItem("token", "dummy_token");
    setMsg("Logged in ✅");
  };

  return (
    <div>
      <h2>Login (Mock)</h2>
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </div>
  );
}

export default Login;