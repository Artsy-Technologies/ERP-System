import React from "react";
import { Nav } from "react-bootstrap";
import { CgSweden } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const LeftSide = ({ sidebarData }) => {
  const navigate = useNavigate();


  const handleNavigation = (path) => {
    navigate(path);
  }

  return (
    <div className="d-flex flex-column bg-dark text-white p-3 sticky-top" style={{ width: "30%", minHeight: "100vh" }}>
      {/* Sidebar Header */}
      <div>
        <img src='/logo.png' alt='lgo' width={250} className='sidebarlogo' />
      </div>

      {/* Sidebar Items */}
      <Nav className="flex-column">
        {sidebarData.menu.map((menuItem, index) => {
          if (menuItem.items) {
            return (
              <div key={index} className="mb-3" style={{ width: "85%", marginLeft: "20px" }}>
                <p className="text-white mb-1 " style={{ fontWeight: "500", fontSize: "16px", marginLeft: "10px" }}>
                  {menuItem.title}
                </p>
                {menuItem.items.map((item, idx) => (
                  <Nav.Link
                    key={idx}
                    onClick={() => handleNavigation(item.path)}
                    className="text-white"
                    style={{ fontSize: "14px", fontWeight: "500", padding: "3px 0", marginBottom: "3px", marginLeft: "20px" }}>
                    {item.name}
                  </Nav.Link>
                ))}
              </div>
            );
          } else {
            return (
              <Nav.Link key={index} href={menuItem.path} className="text-white d-flex align-items-center mb-3">
                <CgSweden style={{ marginRight: "5px" }} />
                {menuItem.title}
              </Nav.Link>
            );
          }
        })}
      </Nav>

      {/* Logout Section */}
      <div className="mt-auto">
        <Nav.Link href="/logout" className="text-white d-flex align-items-center">
          <i className="bi bi-box-arrow-right me-2"></i>
        </Nav.Link>
      </div>
    </div>
  );
};

export default LeftSide;
