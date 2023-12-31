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
  const [milo, setMilo] = useState("😁");

  useEffect(() => {
    if (menu === 1) {
      setFirstMenuClass("tamilotchi__buttons--active");
      setSecondMenuClass(" ");
      setThirdMenuClass(" ");
    } else if (menu === 2) {
      setFirstMenuClass(" ");
      setSecondMenuClass("tamilotchi__buttons--active");
      setThirdMenuClass(" ");
    } else if (menu === 3) {
      setFirstMenuClass(" ");
      setSecondMenuClass(" ");
      setThirdMenuClass("tamilotchi__buttons--active");
    }
  }, [menu]);

  const handleClickLeft = () => {
    if (menu > 1) {
      setMenu(menu - 1);
    }
  };

  const handleClickRight = () => {
    if (menu < 3) {
      setMenu(menu + 1);
    }
  };

  const handleClickOK = () => {
    if (menu === 1) {
      setMilo("💤");
    } else if (menu === 2) {
      setMilo("🌽");
    } else if (menu === 3) {
      setMilo("🥚");
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
