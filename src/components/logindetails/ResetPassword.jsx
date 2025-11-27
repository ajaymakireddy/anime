import { useState } from "react";
import "./LoginPage.css"; // reuse same styling
import { useAuthContext } from "../../Auth.jsx";
import { useNavigate } from "react-router-dom";

const ResetPassword = ({ initialEmail = "", onDone, onBack }) => {
    const [email, setEmail] = useState(initialEmail);
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { axiosInstance } = useAuthContext();
    const navigate = useNavigate();

    const handleSave = async (e) => {
        e.preventDefault();
        setError(null);

        if (!email.trim() || !otp.trim() || !password || !confirm) {
            setError("Please fill all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }

        if (password !== confirm) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            // Adjust endpoint and payload to match your backend
            // Example: POST /auth/reset-password { email, otp, newPassword }
            const res = await axiosInstance.post("/auth/reset-password", {
                email: email.trim().toLowerCase(),
                otp: otp.trim(),
                newPassword: password,
            });

            // On success navigate to login
            // If your login route is '/', change as needed
            navigate("/login");
            if (typeof onDone === "function") onDone();
        } catch (err) {
            console.error(err);
            setError(
                err?.response?.data?.message || "Failed to reset password. Try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSave} className="login-popup-container">
            <div className="login-popup-title">
                <h1>Reset Password</h1>
                <div onClick={() => onBack && onBack()} style={{ cursor: "pointer" }}>
                    ✖
                </div>
            </div>

            <div className="login-popup-inputs">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    autoComplete="new-password"
                />
            </div>

            {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}

            <button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Password"}
            </button>

            <p style={{ marginTop: 10 }}>
                <span
                    onClick={() => onBack && onBack()}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Change email / Back
                </span>
            </p>
        </form>
    );
};

export default ResetPassword;
