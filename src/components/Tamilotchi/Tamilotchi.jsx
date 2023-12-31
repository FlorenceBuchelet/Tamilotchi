import "./Tamilotchi.scss";
import walkingChick from "../../assets/animations";
import { useEffect, useState } from "react";

function Tamilotchi({ firstMenuClass, secondMenuClass, thirdMenuClass, milo }) {
  const [sprite, setSprite] = useState(0);

  /***
   * Interval needs to be cleared to avoid lags and gaps in the animation
   * so we need to declare it with no value: <let intervalId;> would also work, the undefined is implied.
   * then we use prevSprite to increment <sprite>
   * (prevState is an implied parameter in anystate, it ensure we use the latest updated value and helps avoid asynchronous behaviors)
   * then we set the interval into intervalId, 500 = 500ms
   * then we clear it to be sure it stays smooth
   */
  useEffect(() => {
    let intervalId = undefined;
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % walkingChick.length);
    };
    intervalId = setInterval(animateSprite, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <span className="tamilotchi">
        {milo}
        <img
          className="chicken"
          src={walkingChick[sprite].url}
          alt="stardew valley chicken"
        />
      </span>
      <ul className="tamilotchi__buttons">
        <li className={firstMenuClass}>💤</li>
        <li className={secondMenuClass}>🌽</li>
        <li className={thirdMenuClass}>🥚</li>
      </ul>
    </>
  );
}

export default Tamilotchi;
