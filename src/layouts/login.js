import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
function Login() {
  return (
    <div className="login-page outlet">
      <div className="login-container">
        <h1>Sign In</h1>
        <p>Stay updated on your professional world</p>
        <form className="logins">
          <div className="sign-in-input">
            <input type="email" required placeholder="Email or Phone" />
            <input type="text" required placeholder="Password" />
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Forgot Password?
            </a>
          </div>
          <div className="sign-in-btns">
            <button>Sign in</button>
            <p style={{ textAlign: "center" }}>or</p>
            <button
              style={{
                background: "white",
                cursor: "Pointer",
                border: "1px solid black",
                color: "black",
              }}
            >
              <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
