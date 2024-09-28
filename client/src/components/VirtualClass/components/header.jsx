import './header.css';

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-icons">
        <span className="icon">🔔</span>
        <span className="icon">⚙️</span>
        <span className="icon">👤</span>
      </div>
    </div>
  );
};

export default Header;