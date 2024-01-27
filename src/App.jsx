import { useState, useEffect } from "react";
import "./App.scss";
import Tamilotchi from "./components/Tamilotchi/Tamilotchi";

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
  const [milo, setMilo] = useState("😁");

  // pet's stats management
  const [pet, setPet] = useState({
    name: "Tama",
    hunger: 50,
    happiness: 50,
    health: 50,
    age: 0,
    isAlive: true,
  });

  const feed = () => {
    setPet((prevPet) => ({
      ...prevPet,
      hunger: prevPet.hunger - 10,
      happiness: prevPet.happiness + 5,
      health: prevPet.health + 2,
      age: prevPet.age + 1,
    }));
    checkStatus();
  };

  const play = () => {
    setPet((prevPet) => ({
      ...prevPet,
      hunger: prevPet.hunger + 5,
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
      hunger: prevPet.hunger + 2,
      happiness: prevPet.happiness - 2,
      health: prevPet.health - 1,
      age: prevPet.age + 1,
    }));
    checkStatus();
  };

  const checkStatus = () => {
    if (pet.hunger >= 100 || pet.happiness <= 0 || pet.health <= 0) {
      setPet((prevPet) => ({ ...prevPet, isAlive: false }));
      alert(`${pet.name} has passed away. Game over!`);
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
        `Hunger: ${pet.hunger}, Happiness: ${pet.happiness}, Health: ${pet.health}, Age: ${pet.age}`
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
      setMilo("💩");
      clean();
    } else if (menu === 2) {
      setMilo("🌽");
      feed();
    } else if (menu === 3) {
      setMilo("🥚");
      play();
    } else if (menu === 4) {
      setMilo("💪");
      play();
    } else if (menu === 5) {
      setMilo("💕");
      play();
    } else if (menu === 6) {
      setMilo("🎉");
      play();
    }
  };

  return (
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
            milo={milo}
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
  );
}

export default App;
