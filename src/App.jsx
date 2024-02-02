import { useState, useEffect, useContext } from "react";
import "./App.scss";
import Tamilotchi from "./components/Tamilotchi/Tamilotchi";
import HomepageTop from "./components/HomepageTop/HomepageTop";
import HomepageBottom from "./components/HomepageBottom/HomepageBottom";
import { TamasContext } from "./contexts/tamasContext";
import { AuthContext } from "./contexts/authContext";
import { useNavigate } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(1);
  const [firstMenuClass, setFirstMenuClass] = useState(
    "tamilotchi__buttons--active"
  );
  const [secondMenuClass, setSecondMenuClass] = useState(" ");
  const [thirdMenuClass, setThirdMenuClass] = useState(" ");
  const [fourthMenuClass, setFourthMenuClass] = useState(" ");
  const [fifthMenuClass, setFifthMenuClass] = useState(" ");
  const [sixthMenuClass, setSixthMenuClass] = useState(" ");
  const [object, setObject] = useState("");

  const { tamas, setTamas } = useContext(TamasContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Pet latest stats
  useEffect(() => {
    // fetch the tama[0]'s stats in context and initialize the pet
    const fetchTamas = async () => {
      try {
        const checkTamas = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/${user}/tamas`
        );
        const existingTamas = await checkTamas.json();
        if (existingTamas[0]) {
          setTamas(existingTamas);
        } else {
          navigate("/egg");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchTamas();
  }, []);

  // pet's stats management
  const [pet, setPet] = useState({
    name: tamas[0].name,
    satiety: tamas[0].satiety,
    happiness: tamas[0].happiness,
    health: tamas[0].health,
    age: tamas[0].age,
    sprite: tamas[0].sprite,
    isAlive: tamas[0].isAlive,
  });

  const feed = () => {
    setPet((prevPet) => ({
      ...prevPet,
      satiety: prevPet.satiety + 10,
      happiness: prevPet.happiness + 5,
      health: prevPet.health + 2,
      age: prevPet.age + 1,
    }));
    checkStatus();
  };

  const play = () => {
    setPet((prevPet) => ({
      ...prevPet,
      satiety: prevPet.satiety - 5,
      happiness: prevPet.happiness + 10,
      health: prevPet.health + 3,
      age: prevPet.age + 1,
    }));
    checkStatus();
  };

  const clean = () => {
    setPet((prevPet) => ({
      ...prevPet,
      happiness: prevPet.happiness + 5,
      health: prevPet.health + 5,
    }));
    checkStatus();
  };

  const decayStats = () => {
    setPet((prevPet) => ({
      ...prevPet,
      satiety: prevPet.satiety - 2,
      happiness: prevPet.happiness - 2,
      health: prevPet.health - 1,
      age: prevPet.age + 1,
    }));
    checkStatus();
  };

  const checkStatus = () => {
    if (pet.satiety <= 0 || pet.happiness <= 0 || pet.health <= 0) {
      setPet((prevPet) => ({ ...prevPet, isAlive: false }));
      /* alert(`${pet.name} has passed away. Game over!`); */
    }
  };

  useEffect(() => {
    const decayInterval = setInterval(decayStats, 5000); // Decay stats every 5 seconds

    return () => {
      clearInterval(decayInterval);
    };
  }, []);

  useEffect(() => {
    if (pet.isAlive) {
      console.log(`${pet.name} is doing well.`);
      console.log(
        `Hunger: ${pet.satiety}, Happiness: ${pet.happiness}, Health: ${pet.health}, Age: ${pet.age}`
      );
    }
  }, [pet]);
  // end of the pet's stats management

  useEffect(() => {
    if (menu === 1) {
      setFirstMenuClass("tamilotchi__buttons--active");
      setSecondMenuClass(" ");
      setThirdMenuClass(" ");
      setFourthMenuClass(" ");
      setFifthMenuClass(" ");
      setSixthMenuClass(" ");
    } else if (menu === 2) {
      setFirstMenuClass(" ");
      setSecondMenuClass("tamilotchi__buttons--active");
      setThirdMenuClass(" ");
      setFourthMenuClass(" ");
      setFifthMenuClass(" ");
      setSixthMenuClass(" ");
    } else if (menu === 3) {
      setFirstMenuClass(" ");
      setSecondMenuClass(" ");
      setThirdMenuClass("tamilotchi__buttons--active");
      setFourthMenuClass(" ");
      setFifthMenuClass(" ");
      setSixthMenuClass(" ");
    } else if (menu === 4) {
      setFirstMenuClass(" ");
      setSecondMenuClass(" ");
      setThirdMenuClass("");
      setFourthMenuClass("tamilotchi__buttons--active");
      setFifthMenuClass(" ");
      setSixthMenuClass(" ");
    } else if (menu === 5) {
      setFirstMenuClass(" ");
      setSecondMenuClass(" ");
      setThirdMenuClass(" ");
      setFourthMenuClass(" ");
      setFifthMenuClass("tamilotchi__buttons--active");
      setSixthMenuClass(" ");
    } else if (menu === 6) {
      setFirstMenuClass(" ");
      setSecondMenuClass(" ");
      setThirdMenuClass(" ");
      setFourthMenuClass(" ");
      setFifthMenuClass(" ");
      setSixthMenuClass("tamilotchi__buttons--active");
    }
  }, [menu]);

  const handleClickLeft = () => {
    if (menu > 1) {
      setMenu(menu - 1);
    }
  };

  const handleClickRight = () => {
    if (menu < 6) {
      setMenu(menu + 1);
    }
  };

  const handleClickOK = () => {
    if (menu === 1) {
      setObject("🍙");
      feed();
    } else if (menu === 2) {
      setObject("😡");
      play();
    } else if (menu === 3) {
      setObject("💡");
      play();
    } else if (menu === 4) {
      setObject("💊");
      play();
    } else if (menu === 5) {
      setObject("💩");
      clean();
    } else if (menu === 6) {
      setObject("💕");
      play();
    }
  };

  // Reset object after 5s
  useEffect(() => {
    const resetObject = setTimeout(() => {
      setObject("");
    }, 5000);
    return () => {
      clearTimeout(resetObject);
    };
  }, [object]);

  return (
    <>
      <HomepageTop pet={pet} tamilotchiId={tamas[0].tamilotchi_id} />
      <div className="tamagotchi__egg">
        <span className="keyring__hole" />
        <div className="tamagotchi__container">
          <h1 className="tamagotchi__title">Tamilotchi</h1>
          <div className="tamagotchi">
            <Tamilotchi
              firstMenuClass={firstMenuClass}
              secondMenuClass={secondMenuClass}
              thirdMenuClass={thirdMenuClass}
              fourthMenuClass={fourthMenuClass}
              fifthMenuClass={fifthMenuClass}
              sixthMenuClass={sixthMenuClass}
              object={object}
              pet={pet}
              setPet={setPet}
            />
          </div>
        </div>
        <ul className="tamagotchi__buttons">
          <button
            type="button"
            onClick={() => handleClickLeft()}
            className="firstButton"
          />
          <button
            type="submit"
            onClick={() => handleClickOK()}
            className="secondButton"
          />
          <button
            type="button"
            onClick={() => handleClickRight()}
            className="thirdButton"
          />
        </ul>
      </div>
      <HomepageBottom />
    </>
  );
}

export default App;
