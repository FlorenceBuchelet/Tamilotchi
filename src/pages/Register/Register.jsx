import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useRef } from "react";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Post user
    if (passwordRef.current.value === passwordConfirmRef.current.value) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }),
          }
        );
        // if success
        if (response.status === 201) {
          navigate("/");
        } else {
          // if error, message "Something went wrong, let's try again."
          // message shows for a couple seconds then closes
          console.info(response);
        }
      } catch (err) {
        console.error("Error in user creation", err);
      }
    }
    // ELSE passwords not matching
  };

  return (
    <main className="register">
      <h1 className="register__title">Create your account</h1>
      <form onSubmit={handleRegister} className="register__form">
        <p className="register__mandatory">All mandatory</p>
        <label htmlFor="email" type="email" className="register__labels">
          Email
        </label>
        <input
          id="email"
          className="register__inputs"
          ref={emailRef}
          required
        />
        <label htmlFor="password" className="register__labels">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="register__inputs"
          ref={passwordRef}
          required
        />
        <label htmlFor="password" className="register__labels">
          Confirm password
        </label>
        <input
          id="password"
          type="password"
          className="register__inputs"
          ref={passwordConfirmRef}
          required
        />
        <button className="register__button" type="submit">
          Register
        </button>
      </form>
    </main>
  );
}

export default Register;
