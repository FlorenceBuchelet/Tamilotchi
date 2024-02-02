import "./HomepageTop.scss";

function HomepageTop({ pet, tamilotchiId }) {
  const handleSave = async () => {
    // UPDATE table tamagotchi
    console.log(
      "homepageTop update sent",
      {
        satiety: pet.satiety,
        happiness: pet.happiness,
        health: pet.health,
        age: pet.age,
      },
      tamilotchiId
    );
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/tama/${tamilotchiId}/update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            satiety: pet.satiety,
            happiness: pet.happiness,
            health: pet.health,
            age: pet.age,
          }),
        }
      );
      if (response.status === 201) {
        console.log("Tama's stats updated");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="homepageTop">
      <p className="homepageTop__tutorial">?</p>
      <button className="homepageTop__save" onClick={handleSave} type="submit">
        Save
      </button>
    </nav>
  );
}

export default HomepageTop;
