import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setResponseMessage("Please fill out all fields.");
      setIsError(true);
      return;
    }

    console.log("Login submitted:", { email, password });
    setResponseMessage("Login successful!");
    setIsError(false);
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // Integrate Google sign-in logic here
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook Sign-In clicked");
    // Integrate Facebook sign-in logic here
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      {responseMessage && (
        <p className={`response-message ${isError ? "error" : ""}`}>
          {responseMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="social-login">
        <button className="google-button" onClick={handleGoogleSignIn}>
          <FontAwesomeIcon className="social-icon" icon={faGoogle} />
          Sign in with Google
        </button>
        <button className="facebook-button" onClick={handleFacebookSignIn}>
          <FontAwesomeIcon className="social-icon" icon={faFacebook} />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
