import { useNavigate } from "react-router-dom";
import "./EggChoice.scss";

function EggChoice() {
  const navigate = useNavigate();

  const handleChoice = (e) => {
    // TO DO INSERT INTO tamilotchi name, egg and stats (default?)
    e.preventDefault();
    // if fetch ok, navigate.
    navigate("/homepage");
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
        <input className="eggChoice__inputs" id="eggName" type="text" />
        <p className="eggChoice__labels">Choose an egg</p>
        <fieldset>
          <label className="eggChoice__radios--labels" htmlFor="egg1">
            <input
              className="eggChoice__inputs eggChoice__radios"
              id="egg1"
              name="eggs"
              value="egg1"
              type="radio"
              checked
            />
            <img
              className="eggChoice__radios--imgs"
              src="/sprites/eggs/egg1-1.png"
              alt="Tamilotchi egg"
            />
          </label>
          <label className="eggChoice__radios--labels" htmlFor="egg1">
            <input
              className="eggChoice__inputs eggChoice__radios"
              id="egg2"
              name="eggs"
              value="egg2"
              type="radio"
            />
            <img
              className="eggChoice__radios--imgs"
              src="/sprites/eggs/egg2-1.png"
              alt="Tamilotchi egg"
            />
          </label>
          <label className="eggChoice__radios--labels" htmlFor="egg1">
            <input
              className="eggChoice__inputs eggChoice__radios"
              id="egg3"
              name="eggs"
              value="egg3"
              type="radio"
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
