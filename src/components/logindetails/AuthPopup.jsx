// AuthPopup.jsx
import { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import VerifyOtpPage from "./VerifyOtpPage";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import "./AuthPopup.css";

const AuthPopup = ({ setShowLogin, setIsAdmin }) => {
  const [step, setStep] = useState("login"); // login | signup | verify | forgot | reset
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [otp, setOtp] = useState("");

  return (
    <div className="login-popup">
      {step === "login" && (
        <LoginPage
          setShowLogin={setShowLogin}
          setIsAdmin={setIsAdmin}
          onSwitchToSignup={() => setStep("signup")}
          onForgotPassword={() => setStep("forgot")}
        />
      )}

      {step === "signup" && (
        <SignupPage
          signupData={signupData}
          setSignupData={setSignupData}
          onOtpSent={() => setStep("verify")}
          onCancel={() => setStep("login")}
        />
      )}

      {step === "verify" && (
        <VerifyOtpPage
          signupData={signupData}
          otp={otp}
          setOtp={setOtp}
          onVerified={() => {
            alert("Account created successfully!");
            setStep("login");
          }}
          onBack={() => setStep("signup")}
        />
      )}

      {step === "forgot" && (
        <ForgotPassword
          onClose={() => setStep("login")}
          onOpenReset={(email) => {
            // allow ForgotPassword to open ResetPassword with prefilled email
            // we pass the email via a tiny wrapper state in ResetPassword import below
            // For simplicity, we'll set step to reset and have ResetPassword accept an initialEmail prop
            setStep("reset");
            // store email in sessionStorage so ResetPassword can read it (simple approach)
            if (email) sessionStorage.setItem("reset_email", email);
          }}
        />
      )}

      {step === "reset" && (
        <ResetPassword
          initialEmail={sessionStorage.getItem("reset_email") || ""}
          onDone={() => {
            sessionStorage.removeItem("reset_email");
            setStep("login");
          }}
          onBack={() => setStep("forgot")}
        />
      )}
    </div>
  );
};

export default AuthPopup;

