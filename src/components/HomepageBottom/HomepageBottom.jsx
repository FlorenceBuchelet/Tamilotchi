import "./HomepageBottom.scss";

function HomepageBottom() {
  return (
    <nav className="homepageBottom">
      <span className="homepageBottom__buttons--container">
        <label className="homepageBottom__labels">
          <button className="homepageBottom__buttons">
            <img src="/sprites/eggs/egg1-1.png" alt="" />
            Milo
          </button>
        </label>
        <label className="homepageBottom__labels">
          <button className="homepageBottom__buttons">
            <img src="/sprites/eggs/egg1-1.png" alt="" />
            Milo
          </button>
        </label>
        <label className="homepageBottom__labels">
          <button className="homepageBottom__buttons">
            <img src="/sprites/eggs/egg1-1.png" alt="" />
            Milo
          </button>
        </label>
        <img
          className="homepageBottom__menu"
          src="/hamburger.png"
          alt="menu burger"
        />
      </span>
    </nav>
  );
}

export default HomepageBottom;
