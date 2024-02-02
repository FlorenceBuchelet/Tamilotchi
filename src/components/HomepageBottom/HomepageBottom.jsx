import { useContext } from "react";
import "./HomepageBottom.scss";
import { TamasContext } from "../../contexts/tamasContext";
import { Link } from "react-router-dom";

function HomepageBottom() {
  const { tamas } = useContext(TamasContext);

// A la création d'un oeuf, tamas[0] ?
  return (
    <nav className="homepageBottom">
      <span className="homepageBottom__buttons--container">
        <label className="homepageBottom__labels">
          <button className="homepageBottom__buttons">
            <img src={`/${tamas[0].sprite}.png`} alt="" />
            <p>{tamas[0] ? tamas[0].name : "--"}</p>
          </button>
        </label>
        <label className="homepageBottom__labels">
          <button className="homepageBottom__buttons">
            {tamas[1] ? (
              <>
                <img src={`/${tamas[1].sprite}.png`} alt="" />
                <p>{tamas[1].name}</p>
              </>
            ) : (
              <Link to="/egg">
                <img src="/plus.png" alt="" />
              </Link>
            )}
          </button>
        </label>
        <label className="homepageBottom__labels">
          <button className="homepageBottom__buttons">
          {tamas[2] ? (
              <>
                <img src={`/${tamas[2].sprite}.png`} alt="" />
                <p>{tamas[1].name}</p>
              </>
            ) : (
              <Link to="/egg">
                <img src="/plus.png" alt="" />
              </Link>
            )}
          </button>
        </label>
        {/*         <img
          className="homepageBottom__menu"
          src="/hamburger.png"
          alt="menu burger"
        /> */}
      </span>
    </nav>
  );
}

export default HomepageBottom;
