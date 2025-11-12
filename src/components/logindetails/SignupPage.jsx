import { useState } from "react";

const SignupPage = ({ signupData, setSignupData, onOtpSent, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake API request for OTP
    setTimeout(() => {
      console.log("OTP sent to:", signupData.email);
      setLoading(false);
      onOtpSent();
    }, 1000);
  };

  return (
    <form onSubmit={handleSignup} className="login-popup-container">
      <div className="login-popup-title">
        <h2>Sign Up</h2>
        <div onClick={onCancel} style={{ cursor: "pointer" }}>✖</div>
      </div>

      <div className="login-popup-inputs">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={signupData.name}
          onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={signupData.email}
          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={signupData.password}
          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>

      <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>By continuing, I agree to the terms of use & privacy policy</p>
      </div>

      <p>
        Already have an account?{" "}
        <span onClick={onCancel}>Login Here</span>
      </p>
    </form>
  );
};

export default SignupPage;
