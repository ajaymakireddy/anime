import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Your World of Anime Figures</h2>
          <p>
            Discover authentic , high-quality figures from your favorite anime series.
          </p>
          <div className="buttons">
            <button className="shop">Shop New Arrivals</button>
            <button className="view">View Bundles</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
