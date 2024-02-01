import "./HomepageTop.scss";

function HomepageTop() {
    const handleSave = () => {
        // UPDATE table tamagotchi
    }
    return ( 
        <nav className="homepageTop">
            <p className="homepageTop__tutorial">?</p>
            <button className="homepageTop__save" onClick={handleSave} type="submit">Save</button>
        </nav>
     );
}

export default HomepageTop;