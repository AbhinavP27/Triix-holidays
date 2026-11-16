import { useState } from "react";

import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight
} from "lucide-react";

import {
    Link,
    useNavigate,
    useLocation
} from "react-router-dom";

import "./Auth.css";

import { loginDemo } from "../utils/auth";


function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    // Redirect to the originally requested page
    const redirectPath = location.state?.from?.pathname || "/dashboard";


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const [rememberMe, setRememberMe] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");


    // Handle input changes
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setError("");
        setSuccess("");

    };


    // Handle login
    const handleSubmit = (e) => {

        e.preventDefault();

        const email = formData.email.trim().toLowerCase();

        // Validate empty fields
        if (!email || !formData.password) {

            setError("Please enter your email and password.");

            return;

        }


        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            setError("Please enter a valid email address.");

            return;

        }


        // Validate password
        if (formData.password.length < 6) {

            setError("Password must contain at least 6 characters.");

            return;

        }


        // Frontend demo authentication
        // Creates session and updates Navbar immediately

        loginDemo(email);


        // Remember email
        if (rememberMe) {

            localStorage.setItem("triixRememberEmail", email);

        } else {

            localStorage.removeItem("triixRememberEmail");

        }


        setSuccess("Login successful! Redirecting...");


        // Navigate after successful login
        setSuccess("Login successful!");

        navigate(redirectPath, { replace: true });

    };


    return (

        <div className="auth-page">

            <div className="auth-container">


                {/* LEFT IMAGE */}

                <div className="auth-image-section">

                    <div className="auth-image-content">

                        <span>TRIIX HOLIDAYS</span>

                        <h1>
                            Your Journey.
                            <br />
                            Your People.
                            <br />
                            Your Adventure.
                        </h1>

                        <p>
                            Discover new destinations, meet travellers
                            and create unforgettable memories.
                        </p>

                    </div>

                </div>


                {/* LOGIN FORM */}

                <div className="auth-form-section">

                    <div className="auth-form-wrapper">


                        {/* LOGO */}

                        <Link to="/" className="auth-logo">

                            TRIIX <span>HOLIDAYS</span>

                        </Link>


                        {/* HEADING */}

                        <div className="auth-heading">

                            <h2>Welcome Back!</h2>

                            <p>
                                Sign in to continue your travel journey.
                            </p>

                        </div>


                        {/* ERROR MESSAGE */}

                        {error && (

                            <div className="auth-error">

                                {error}

                            </div>

                        )}


                        {/* SUCCESS MESSAGE */}

                        {success && (

                            <div className="auth-success">

                                {success}

                            </div>

                        )}


                        {/* LOGIN FORM */}

                        <form onSubmit={handleSubmit}>


                            {/* EMAIL */}

                            <div className="auth-field">

                                <label>Email Address</label>

                                <div className="auth-input-wrapper">

                                    <Mail size={19} />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />

                                </div>

                            </div>


                            {/* PASSWORD */}

                            <div className="auth-field">

                                <label>Password</label>

                                <div className="auth-input-wrapper">

                                    <Lock size={19} />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        required
                                    />


                                    {/* PASSWORD VISIBILITY */}

                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >

                                        {showPassword ? (

                                            <EyeOff size={19} />

                                        ) : (

                                            <Eye size={19} />

                                        )}

                                    </button>

                                </div>

                            </div>


                            {/* OPTIONS */}

                            <div className="auth-options">

                                <label className="remember-option">

                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) =>
                                            setRememberMe(e.target.checked)
                                        }
                                    />

                                    Remember Me

                                </label>


                                <Link to="/forgot-password">

                                    Forgot Password?

                                </Link>

                            </div>


                            {/* SUBMIT BUTTON */}

                            <button
                                type="submit"
                                className="auth-submit-btn"
                                disabled={!!success}
                            >

                                Sign In

                                <ArrowRight size={18} />

                            </button>

                        </form>


                        {/* DIVIDER */}

                        <div className="auth-divider">

                            <span>OR</span>

                        </div>


                        {/* REGISTER LINK */}

                        <p className="auth-switch">

                            Don't have an account?

                            <Link to="/register">

                                Create Account

                            </Link>

                        </p>


                        {/* BOTTOM TEXT */}

                        <p className="auth-bottom-text">

                            By continuing, you agree to our Terms
                            and Privacy Policy.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;