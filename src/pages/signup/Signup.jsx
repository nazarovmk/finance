import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import "./Signup.scss";

function Signup() {
  const { register, isPending } = useRegister();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const displayName = formData.get("displayName");
    register(email, displayName, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src="./Sidebar.png" alt="Sidebar illustration" />
      </div>
      <div className="signup-right">
        <h2 className="signup-title">Sign Up</h2>
        <form className="form-signup" onSubmit={handleRegister}>
          <div className="form-input-wrap">
            <div className="signup-lab">
              <label className="lab" htmlFor="displayName">
                Name
              </label>
              <input
                className="inp-signup"
                type="text"
                id="displayName"
                name="displayName"
                required
              />
            </div>
            <div className="signup-lab">
              <label className="lab" htmlFor="email">
                Email
              </label>
              <input
                className="inp-signup"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="signup-lab">
              <label className="lab" htmlFor="password">
                Create Password
              </label>
              <input
                className="inp-signup"
                type="password"
                id="password"
                name="password"
                required
              />
              <p className="password-text">
                Passwords must be at least 8 characters
              </p>
            </div>
          </div>
          <button className="signup-btn" disabled={isPending}>
            {isPending ? "Registering..." : "Sign Up"}
          </button>
        </form>
        <span className="text-and-link">
          <p className="signup-text">Already have an account?</p>
          <Link className="to-signin" to="/login">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
