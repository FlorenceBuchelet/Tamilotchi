import { useState } from "react";
import "./App.scss";
import Tamilotchi from "./components/Tamilotchi/Tamilotchi";

function App() {
  const [button, setButton] = useState(1);
  const [firstButtonClass, setFirstButtonClass] = useState(
    "tamilotchi__buttons--active"
  );
  const [secondButtonClass, setSecondButtonClass] = useState(" ");
  const [thirdButtonClass, setThirdButtonClass] = useState(" ");
  const [milo, setMilo] = useState("😁");

  const handleClickLeft = () => {
    if (button > 1) {
      setButton(button - 1);
      console.log("left", button);
    }
  };

  const handleLeft = () => {
    handleClass();
    handleClickLeft();
    console.log("2 left", button);
  };

  const handleClikRight = () => {
    if (button < 3) {
      setButton(button + 1);
      console.log("right", button);
    }
  };

  const handleRight = () => {
    handleClass();
    handleClikRight();
    console.log("2 right", button);
  };

  const handleClickOK = () => {
    handleClass();
    if (button === 1) {
      setMilo("🎶");
    } else if (button === 2) {
      setMilo("📚");
    } else if (button === 3) {
      setMilo("🎨");
    }
    console.log("ok", button);
  };

  const handleClass = () => {
    if (button === 1) {
      setFirstButtonClass("tamilotchi__buttons--active");
      setSecondButtonClass(" ");
      setThirdButtonClass(" ");
    } else if (button === 2) {
      setFirstButtonClass(" ");
      setSecondButtonClass("tamilotchi__buttons--active");
      setThirdButtonClass(" ");
    } else if (button === 3) {
      setFirstButtonClass(" ");
      setSecondButtonClass(" ");
      setThirdButtonClass("tamilotchi__buttons--active");
    }
  };

  return (
    <div className="tamagotchi__egg">
      <span className="keyring__hole" />
      <div className="tamagotchi__container">
        <h1 className="tamagotchi__title">Tamilotchi</h1>
        <div className="tamagotchi">
          <Tamilotchi
            firstButtonClass={firstButtonClass}
            secondButtonClass={secondButtonClass}
            thirdButtonClass={thirdButtonClass}
            milo={milo}
          />
        </div>
      </div>
      <ul className="tamagotchi__buttons">
        <button
          type="button"
          onClick={() => handleLeft()}
          className="firstButton"
        />
        <button
          type="submit"
          onClick={() => handleClickOK()}
          className="secondButton"
        />
        <button
          type="button"
          onClick={() => handleRight()}
          className="thirdButton"
        />
      </ul>
    </div>
  );
}

export default App;
