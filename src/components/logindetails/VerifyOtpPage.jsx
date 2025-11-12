const VerifyOtpPage = ({ signupData, otp, setOtp, onVerified, onResendOtp, onBack }) => {
  const handleVerify = (e) => {
    e.preventDefault();

    if (otp === "1234") { // demo OTP validation
      console.log("OTP verified for:", signupData.email);
      onVerified();
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <form onSubmit={handleVerify} className="login-popup-container">
      <div className="login-popup-title">
        <h2>Verify OTP</h2>
        <div onClick={onBack} style={{ cursor: "pointer" }}>← Back</div>
      </div>

      <div className="login-popup-inputs">
        <p>Enter the OTP sent to <b>{signupData.email}</b></p>
        <input
          type="text"
          placeholder="Enter 4-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          maxLength={6}
        />
      </div>

      <button type="submit">Verify</button>
      <p>
        Didn’t receive OTP?{" "}
        <span onClick={onResendOtp}>Resend</span>
      </p>
    </form>
  );
};

export default VerifyOtpPage;
