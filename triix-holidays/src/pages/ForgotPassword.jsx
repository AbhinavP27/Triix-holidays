import { useState } from "react";

import {
  Mail,
  ArrowLeft,
  Send,
  CheckCircle
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Auth.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);


  const handleSubmit = (e) => {

    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    // Demonstration only.
    // No actual reset email is sent.

    setSuccess(true);

  };


  return (

    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-image-section">

          <div className="auth-image-content">

            <span>TRIIX HOLIDAYS</span>

            <h1>
              Every Journey
              <br />
              Has a New
              <br />
              Beginning.
            </h1>

            <p>
              Get back to planning your next adventure.
            </p>

          </div>

        </div>


        <div className="auth-form-section">

          <div className="auth-form-wrapper">

            <Link to="/" className="auth-logo">
              TRIIX <span>HOLIDAYS</span>
            </Link>


            {success ? (

              <div className="forgot-success">

                <CheckCircle size={55} />

                <h2>Request Received</h2>

                <p>
                  This is a demonstration interface.
                  Password reset emails are not currently
                  configured.
                </p>

                <Link to="/login">
                  Return to Login
                </Link>

              </div>

            ) : (

              <>

                <div className="auth-heading">

                  <h2>Forgot Password?</h2>

                  <p>
                    Enter your email address to request
                    a password reset.
                  </p>

                </div>


                {error && (
                  <div className="auth-error">
                    {error}
                  </div>
                )}


                <form onSubmit={handleSubmit}>

                  <div className="auth-field">

                    <label>Email Address</label>

                    <div className="auth-input-wrapper">

                      <Mail size={19} />

                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError("");
                        }}
                        required
                      />

                    </div>

                  </div>


                  <button
                    type="submit"
                    className="auth-submit-btn"
                  >

                    Send Reset Request

                    <Send size={18} />

                  </button>

                </form>


                <Link
                  to="/login"
                  className="back-to-login"
                >

                  <ArrowLeft size={17} />

                  Back to Login

                </Link>

              </>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}

export default ForgotPassword;