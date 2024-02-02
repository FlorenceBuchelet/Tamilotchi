import "./Tamilotchi.scss";
import babytchiBlack from "../../assets/babytchiBlack";
import eggs from "../../assets/eggs";
import { useEffect, useState } from "react";

function Tamilotchi({
  firstMenuClass,
  secondMenuClass,
  thirdMenuClass,
  fourthMenuClass,
  fifthMenuClass,
  sixthMenuClass,
  object,
  pet,
  setPet,
}) {
  const [sprite, setSprite] = useState(0);
  const [currentTama, setCurrentTama] = useState();
  const [tamaClass, setTamaClass] = useState();

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
    // Eggs
    if (pet.sprite === "sprites/eggs/egg1-1") {
      const animateSprite = () => {
        setSprite((prevSprite) => (prevSprite + 1) % eggs.egg1.length);
        setCurrentTama(eggs.egg1[sprite].url);
        setTamaClass("egg__hatching");
        // Swicth to the baby
        if (sprite === eggs.egg1.length - 1) {
          setPet((prevPet) => ({
            ...prevPet,
            sprite: "sprites/babytchi/babytchi-walk1",
          }));
        }
      };
      intervalId = setInterval(animateSprite, 500);
    }
    if (pet.sprite === "sprites/eggs/egg2-1") {
      const animateSprite = () => {
        setSprite((prevSprite) => (prevSprite + 1) % eggs.egg2.length);
        setCurrentTama(eggs.egg2[sprite].url);
        setTamaClass("egg__hatching");
        // Swicth to the baby
        if (sprite === eggs.egg2.length - 1) {
          setPet((prevPet) => ({
            ...prevPet,
            sprite: "sprites/babytchi/babytchi-walk1",
          }));
        }
      };
      intervalId = setInterval(animateSprite, 500);
    }
    if (pet.sprite === "sprites/eggs/egg3-1") {
      const animateSprite = () => {
        setSprite((prevSprite) => (prevSprite + 1) % eggs.egg3.length);
        setCurrentTama(eggs.egg3[sprite].url);
        setTamaClass("egg__hatching");
        // Swicth to the baby
        if (sprite === eggs.egg3.length - 1) {
          setPet((prevPet) => ({
            ...prevPet,
            sprite: "sprites/babytchi/babytchi-walk1",
          }));
        }
      };
      intervalId = setInterval(animateSprite, 500);
    }
    // Babies
    if (pet.sprite === "sprites/babytchi/babytchi-walk1") {
      const animateSprite = () => {
        setSprite((prevSprite) => (prevSprite + 1) % babytchiBlack.walk.length);
        setCurrentTama(babytchiBlack.walk[sprite].url);
        setTamaClass("babytchi__walk");
        if (object) {
          if (object === "💕" || object === "🍙") {
            setSprite(
              (prevSprite) => (prevSprite + 1) % babytchiBlack.happy.length
            );
            setCurrentTama(babytchiBlack.happy[sprite].url);
            setTamaClass("babytchi__happy");
          }
        }  else {
          if (pet.health <= 40) {
            setSprite(
              (prevSprite) => (prevSprite + 1) % babytchiBlack.sick.length
            );
            setCurrentTama(babytchiBlack.sick[sprite].url);
            setTamaClass("babytchi__sick");
          }  else if (pet.satiety <= 40 || pet.happiness <= 20) {
            setSprite(
              (prevSprite) => (prevSprite + 1) % babytchiBlack.upset.length
            );
            setCurrentTama(babytchiBlack.upset[sprite].url);
          }
        } 
      };
      intervalId = setInterval(animateSprite, 500);
    }
    // Teens
    // Adults

    // Cleanup function triggers when the component unmounts
    return () => clearInterval(intervalId);
  }, [pet, sprite]);

  return (
    <>
      <ul className="tamilotchi__buttons">
        <li className={firstMenuClass}>
          <img
            className="tamilotchi__icons"
            src="/logos/Food_icon_p1.webp"
            alt="feed"
          />
        </li>
        <li className={secondMenuClass}>
          <img
            className="tamilotchi__icons"
            src="/logos/Training_icon_p1.webp"
            alt="yell"
          />
        </li>
        <li className={thirdMenuClass}>
          <img
            className="tamilotchi__icons"
            src="/logos/Lights_icon_p1.webp"
            alt="light"
          />
        </li>
      </ul>
      <p className="tamilotchi__object">{object}</p>
      <span className={`tamilotchi ${tamaClass}`}>
        <img className="currentTama" src={currentTama} alt="tamagotchi" />
      </span>
      <ul className="tamilotchi__buttons">
        <li className={fourthMenuClass}>
          <img
            className="tamilotchi__icons"
            src="/logos/Medicine_icon_p1.webp"
            alt="medicine"
          />
        </li>
        <li className={fifthMenuClass}>
          <img
            className="tamilotchi__icons"
            src="/logos/Bathroom_icon_p1.webp"
            alt="clean"
          />
        </li>
        <li className={sixthMenuClass}>
          <img
            className="tamilotchi__icons"
            src="/logos/Attention_icon_p1.webp"
            alt="attention"
          />
        </li>
      </ul>
    </>
  );
}

export default Tamilotchi;
