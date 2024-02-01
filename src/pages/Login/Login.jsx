import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

/*     fetch(`${import.meta.env.VITE_BACKEND_URL}/api/`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error)); */
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [notUser, setNotUser] = useState();

  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            hashedPassword: passwordRef.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();
        setUser(user[0].user_id);
        navigate("/egg");
      } else {
        setNotUser(true);
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
    // Check if the user is in the database (Fetch)
    // If not: register message 
    // setNotUser(true);
    // if they are
    // Check if they have a Tama
    // if they have
    // navigate("/homepage");
    // if they don't
  };

  return (
    <main className="login">
      <h1 className="login__title">Tamilotchi</h1>
      <form onSubmit={handleLogin} className="login__form">
        <label htmlFor="email" type="email" className="login__labels">
          Email
        </label>
        <input id="email" className="login__inputs" ref={emailRef}/>
        <label htmlFor="password" className="login__labels">
          Password
        </label>
        <input id="password" type="password" className="login__inputs" ref={passwordRef}/>
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
