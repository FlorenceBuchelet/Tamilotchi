import { useNavigate } from "react-router-dom";
import "./EggChoice.scss";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { TamasContext } from "../../contexts/tamasContext";

function EggChoice() {
  const nicknameRef = useRef();
  const [eggValue, setEggValue] = useState();
  const { user } = useContext(AuthContext);
  const { tamas, setTamas } = useContext(TamasContext);
  const navigate = useNavigate();

  const handleChoice = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/tama/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: nicknameRef.current.value,
            sprite: eggValue,
            user_id: user,
          }),
        }
      );
      if (response.status === 201) {
        // set only the id but I need the whole pet
        const insertId = await response.json();
        try {
          const fetchNewTama = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/tama/${insertId}`
          );
          const newTama = await fetchNewTama.json();
          if (newTama[0]) {
          setTamas({ newTama });
          }
        } catch (err) {
          console.error(err);
        }
        navigate("/homepage");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error("Error in Tama creation", err);
    }
    // if not ok, message "Something went wrong, let's try again."
  };

  return (
    <main className="eggChoice">
      <h1 className="eggChoice__title">
        <p>Your new</p>
        <p>✨ Tamilotchi ✨</p>
      </h1>
      <form onSubmit={handleChoice} className="eggChoice__form">
        <label className="eggChoice__labels" htmlFor="eggName">
          Nickname
        </label>
        <input
          className="eggChoice__inputs"
          id="eggName"
          type="text"
          ref={nicknameRef}
          required
        />
        <p className="eggChoice__labels">Choose an egg</p>
        <fieldset>
          <label className="eggChoice__radios--labels" htmlFor="egg1">
            <input
              className="eggChoice__inputs eggChoice__radios"
              id="egg1"
              name="eggs"
              value="egg1"
              type="radio"
              onClick={() => setEggValue("sprites/eggs/egg1-1")}
            />
            <img
              className="eggChoice__radios--imgs"
              src="/sprites/eggs/egg1-1.png"
              alt="Tamilotchi egg"
            />
          </label>
          <label className="eggChoice__radios--labels" htmlFor="egg2">
            <input
              className="eggChoice__inputs eggChoice__radios"
              id="egg2"
              name="eggs"
              value="egg2"
              type="radio"
              defaultChecked
              onClick={() => setEggValue("sprites/eggs/egg2-1")}
            />
            <img
              className="eggChoice__radios--imgs"
              src="/sprites/eggs/egg2-1.png"
              alt="Tamilotchi egg"
            />
          </label>
          <label className="eggChoice__radios--labels" htmlFor="egg3">
            <input
              className="eggChoice__inputs eggChoice__radios"
              id="egg3"
              name="eggs"
              value="egg3"
              type="radio"
              onClick={() => setEggValue("sprites/eggs/egg3-1")}
            />
            <img
              className="eggChoice__radios--imgs"
              src="/sprites/eggs/egg3-1.png"
              alt="Tamilotchi egg"
            />
          </label>
        </fieldset>
        <button className="eggChoice__button" type="submit">
          Meet your new baby
        </button>
      </form>
    </main>
  );
}

export default EggChoice;
