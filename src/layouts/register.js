import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage(`Registered with Email: ${email}`);
    setIsError(false);
    console.log("User registered with:", { name, email, password });
  };

  // Placeholder function for Google registration
  const handleGoogleSignIn = () => {
    setMessage("Registered with Google (placeholder)");
    setIsError(false);
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="reg-container">
      <div className="card">
        <h2 className="title">Register</h2>

        {message && (
          <p className={`message ${isError ? "error" : ""}`}>{message}</p>
        )}

        <form onSubmit={handleRegister} className="form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button primary">
            Register with Email
          </button>
        </form>

        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-text">or</div>
          <div className="divider-line"></div>
        </div>

        <button onClick={handleGoogleSignIn} className="button google">
          <FontAwesomeIcon icon={faGoogle} />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
