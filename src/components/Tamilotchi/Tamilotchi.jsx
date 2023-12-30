import "./Tamilotchi.scss";
import walkingChick from "../../assets/animations";
import { useState } from "react";

function Tamilotchi({ firstButtonClass, secondButtonClass, thirdButtonClass }) {

  const [sprite, setSprite] = useState(0);

  const animation = setInterval(() => {
    if (sprite < walkingChick.length-1) {
      setSprite(sprite +1);
    } else {
      setSprite(0);
    }
  }, 500)


  return (
    <>
      <span className="tamilotchi"><img onClick={animation} className="chicken" src={walkingChick[sprite].url} alt="stardew valley chicken"/></span>
      <ul className="tamilotchi__buttons">
        <li className={firstButtonClass}>💤</li>
        <li className={secondButtonClass}>🌽</li>
        <li className={thirdButtonClass}>🥚</li>
      </ul>
    </>
  );
}

export default Tamilotchi;
