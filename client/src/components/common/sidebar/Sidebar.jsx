import { NavLink, useNavigate } from "react-router-dom"; // Use NavLink for active class
import "./sidebar.css";
import { sidebar } from "../../../assets/webData/sidebar"; // Assuming the JSON data is exported from a separate file

const Sidebar = () => {

  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`/${link}`)
  };

  return (
    <aside className="sidebarCantainer">
      <div>
        <img src="/logo.png" alt="logo" width={250} className="sidebarlogo" />
      </div>
      <div className="ulCantainer">
        {sidebar.sidebarItems.map((item, index) => (
          <div key={index} className="sidebar-item">
            <NavLink
              to={`/${item.link}`}
              className="sidebar-link"
              activeClassName="active" // Apply 'active' class when link is active
              onClick= {() => handleNavigate(item.link)}
            >
              <span className="mx-2">{item?.icon}</span>
              <span>{item.text}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

