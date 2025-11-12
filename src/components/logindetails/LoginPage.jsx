import { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ setShowLogin, setIsAdmin, onSwitchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim().toLowerCase() === "admin@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    console.log("Logged in:", email);
    setShowLogin(false);
  };

  return (
    <form onSubmit={handleSubmit} className="login-popup-container">
      <div className="login-popup-title">
        <h1>Login</h1>
        <div onClick={() => setShowLogin(false)} style={{ cursor: "pointer" }}>✖</div>
      </div>

      <div className="login-popup-inputs">
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Login</button>

      <p>
        Create New Account?{" "}
        <span onClick={onSwitchToSignup}>Click Here</span>
      </p>
    </form>
  );
};

export default LoginPage;
