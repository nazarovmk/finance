import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import "./Login.scss";

function Login() {
  const { login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="./Sidebar.png" alt="" />
      </div>
      <div className="login-right">
        <h2 className="login-title">Login</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-input-wrap">
            <div className="login-lab">
              <label className="lab" htmlFor="email">
                Email
              </label>
              <input
                className="inp-login"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="login-lab">
              <label className="lab" htmlFor="password">
                Password
              </label>
              <input
                className="inp-login"
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
          </div>
          <button className="login-btn" disabled={isPending}>
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>
        <span className="text-and-link">
          <p className="login-text">Need to create an account?</p>
          <Link className="to-singnup" to="/signup">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
