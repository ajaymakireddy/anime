import { useState } from "react";
import "./LoginPage.css"; // reuse same styling
import { useAuthContext } from "../../Auth.jsx";
import ResetPassword from "./ResetPassword";

const ForgotPassword = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [showReset, setShowReset] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { axiosInstance } = useAuthContext();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setError(null);

        if (!email.trim()) {
            setError("Please enter your email");
            return;
        }

        setLoading(true);
        try {
            // Adjust the endpoint to your backend's reset/OTP endpoint
            // Example: POST /auth/forgot-password { email }
            const res = await axiosInstance.post("/auth/forgot-password", {
                email: email.trim().toLowerCase(),
            });

            // handle response as needed; assuming success => show reset form
            setShowReset(true);
        } catch (err) {
            console.error(err);
            setError(
                err?.response?.data?.message || "Failed to send OTP. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    // If OTP sent, show the reset component (verify + set new password)
    if (showReset) {
        return (
            <ResetPassword
                initialEmail={email}
                onDone={() => {
                    // close popup or whatever parent wants
                    if (typeof onClose === "function") onClose();
                }}
                onBack={() => setShowReset(false)}
            />
        );
    }

    return (
        <form onSubmit={handleSendOtp} className="login-popup-container">
            <div className="login-popup-title">
                <h1>Forgot Password</h1>
                <div onClick={() => onClose && onClose()} style={{ cursor: "pointer" }}>
                    ✖
                </div>
            </div>

            <div className="login-popup-inputs">
                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />
            </div>

            {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}

            <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
            </button>

            <p style={{ marginTop: 10 }}>
                Remembered your password?{" "}
                <span
                    onClick={() => onClose && onClose()}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Back to Login
                </span>
            </p>
        </form>
    );
};

export default ForgotPassword;
