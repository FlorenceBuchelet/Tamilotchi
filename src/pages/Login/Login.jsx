import { Link } from "react-router-dom";
import "./Login.scss";

function Login() {
  return (
    <main className="login">
      <h1 className="login__title">Tamilotchi</h1>
      <form className="login__form">
        <label htmlFor="email" type="email" className="login__labels">Email
        </label>
          <input id="email" className="login__inputs" />
        <label htmlFor="password" className="login__labels">Password
        </label>
          <input id="password" type="password" className="login__inputs" />
        <Link className="login__register" to="/register">Create an account</Link>
        <button className="login__button" type="submit">ok</button>
      </form>
    </main>
  );
}

export default Login;
