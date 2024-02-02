import { useEffect, useState } from "react";
import eggs from "../assets/eggs";
import babytchiBlack from "../assets/babytchiBlack";


function TamaLogic() {
const [pet, setPet] = useState();
const [currentTama, setCurrentTama] = useState();
const [tamaClass, setTamaClass] = useState();

useEffect(() => {
  let intervalId = undefined;
  // Eggs
  if (pet.sprite === "sprites/eggs/egg1-1") {
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % eggs.egg1.length);
      setCurrentTama(eggs.egg1[sprite].url);
      setTamaClass("egg__hatching");
    };
    intervalId = setInterval(animateSprite, 500);
  }
  if (pet.sprite === "sprites/eggs/egg2-1") {
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % eggs.egg2.length);
      setCurrentTama(eggs.egg2[sprite].url);
      setTamaClass("egg__hatching");
    };
    intervalId = setInterval(animateSprite, 500);
  }
  if (pet.sprite === "sprites/eggs/egg3-1") {
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % eggs.egg3.length);
      setCurrentTama(eggs.egg3[sprite].url);
      setTamaClass("egg__hatching");
    };
    intervalId = setInterval(animateSprite, 500);
  }
  // Babies
  if (pet.sprite === "sprites/babytchi/babytchi-walk1") {
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % babytchiBlack.walk.length);
      setCurrentTama(babytchiBlack.walk[sprite].url);
      setTamaClass("babytchi__walk");
    };
    intervalId = setInterval(animateSprite, 500);
  }
  // Teens
  // Adults
  // Cleanup function triggers when the component unmounts
  return () => clearInterval(intervalId);
}, [pet]);
return (  );
}

export default TamaLogic;