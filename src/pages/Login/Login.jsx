import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";

/*     fetch(`${import.meta.env.VITE_BACKEND_URL}/api/`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error)); */
function Login() {
  const navigate = useNavigate();
  const [notUser, setNotUser] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the user is in the database (Fetch)
    // If not: register message 
    // setNotUser(true);
    // if they are
    // Check if they have a Tama
    // if they have
    // navigate("/homepage");
    // if they don't
    navigate("/egg");
  };

  return (
    <main className="login">
      <h1 className="login__title">Tamilotchi</h1>
      <form onSubmit={handleLogin} className="login__form">
        <label htmlFor="email" type="email" className="login__labels">
          Email
        </label>
        <input id="email" className="login__inputs" />
        <label htmlFor="password" className="login__labels">
          Password
        </label>
        <input id="password" type="password" className="login__inputs" />
        <Link className="login__register" to="/register">
          Create an account <strong>⇨</strong>
        </Link>
        <button className="login__button" type="submit">
          Enter
        </button>
      </form>
    </main>
  );
}

export default Login;
