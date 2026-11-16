import { useState } from "react";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import "./Auth.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState("");


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setError("");

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    const email = formData.email.trim().toLowerCase();

    if (!formData.name.trim() || !email) {
      setError("Please complete all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeTerms) {
      setError("Please accept the Terms and Conditions.");
      return;
    }

    // Save demonstration profile information only.
    // Never save a password in LocalStorage.

    const existingProfile = JSON.parse(
      localStorage.getItem("triixProfile") || "{}"
    );

    const updatedProfile = {
      ...existingProfile,
      name: formData.name.trim(),
      email
    };

    localStorage.setItem(
      "triixProfile",
      JSON.stringify(updatedProfile)
    );

    navigate("/login");

  };


  return (

    <div className="auth-page">

      <div className="auth-container">

        {/* IMAGE */}

        <div className="auth-image-section">

          <div className="auth-image-content">

            <span>JOIN TRIIX HOLIDAYS</span>

            <h1>
              Explore More.
              <br />
              Experience More.
              <br />
              Live More.
            </h1>

            <p>
              Create your account and start discovering
              incredible travel experiences.
            </p>

          </div>

        </div>


        {/* REGISTER FORM */}

        <div className="auth-form-section">

          <div className="auth-form-wrapper">

            <Link to="/" className="auth-logo">
              TRIIX <span>HOLIDAYS</span>
            </Link>


            <div className="auth-heading">

              <h2>Create Account</h2>

              <p>
                Join our travel community today.
              </p>

            </div>


            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}


            <form onSubmit={handleSubmit}>

              {/* NAME */}

              <div className="auth-field">

                <label>Full Name</label>

                <div className="auth-input-wrapper">

                  <User size={19} />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                </div>

              </div>


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
                    placeholder="Minimum 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
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


              {/* CONFIRM PASSWORD */}

              <div className="auth-field">

                <label>Confirm Password</label>

                <div className="auth-input-wrapper">

                  <Lock size={19} />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >

                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}

                  </button>

                </div>

              </div>


              {/* TERMS */}

              <label className="terms-option">

                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) =>
                    setAgreeTerms(e.target.checked)
                  }
                />

                I agree to the Terms and Conditions.

              </label>


              <button
                type="submit"
                className="auth-submit-btn"
              >

                Create Account

                <ArrowRight size={18} />

              </button>

            </form>


            <p className="auth-switch">

              Already have an account?

              <Link to="/login">
                Sign In
              </Link>

            </p>


          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;