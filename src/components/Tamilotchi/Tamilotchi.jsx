import "./Tamilotchi.scss";
import babytchiBlack from "../../assets/babytchiBlack";
import { useEffect, useState } from "react";

function Tamilotchi({ firstMenuClass, secondMenuClass, thirdMenuClass, fourthMenuClass, fifthMenuClass, sixthMenuClass, milo }) {
  const [sprite, setSprite] = useState(0);

  /***
   * Interval needs to be cleaned to avoid lags and gaps in the animation
   * so we need to declare it with no value: <let intervalId;> would also work, the undefined is implied.
   * then we use prevSprite to increment <sprite>
   * (prevState is an implied parameter in anystate, it ensures we use the latest updated value and helps avoid asynchronous behaviors)
   * then we set the interval into intervalId, 500 = 500ms
   * then we clean it to be sure it stays smooth
   */
  useEffect(() => {
    let intervalId = undefined;
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % babytchiBlack.walk.length);
    };
    intervalId = setInterval(animateSprite, 500);
    // Cleanup function triggers when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ul className="tamilotchi__buttons">
        <li className={firstMenuClass}><img className="tamilotchi__icons" src="/Food_icon_p1.webp" alt="feed" /></li>
        <li className={secondMenuClass}><img className="tamilotchi__icons" src="/Training_icon_p1.webp" alt="feed" /></li>
        <li className={thirdMenuClass}><img className="tamilotchi__icons" src="/Lights_icon_p1.webp" alt="feed" /></li>
      </ul>
      <span className="tamilotchi">
        {milo}
        <img
          className="babytchi"
          src={babytchiBlack.walk[sprite].url}
          alt="babytchi"
        />
      </span>
      <ul className="tamilotchi__buttons">
        <li className={fourthMenuClass}><img className="tamilotchi__icons" src="/Medicine_icon_p1.webp" alt="feed" /></li>
        <li className={fifthMenuClass}><img className="tamilotchi__icons" src="/Bathroom_icon_p1.webp" alt="feed" /></li>
        <li className={sixthMenuClass}><img className="tamilotchi__icons" src="/Attention_icon_p1.webp" alt="feed" /></li>
      </ul>
    </>
  );
}

export default Tamilotchi;
