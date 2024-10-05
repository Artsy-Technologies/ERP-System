import React from 'react';
import { sidebarData } from '../../../assets/webData/techerspagedata';
import '../../../pages/Teacher/teacher.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const LeftSidebar = ({ banner }) => {
  return (
    <div className="leftbox">
      <img src={banner} alt="banner" width="98%" />
      <br />
      {/* Use Bootstrap Grid system */}
      <div className="container">
        <div className="row">
          {sidebarData.menuItems.map((item, index) => (
            <div className="col-md-6 col-sm-12 mb-3" key={index}>
              <div className="d-flex justify-content-center align-items-stretch h-100">
                <div className="substring p-3 border rounded d-flex flex-column justify-content-between w-100">
                  <i className={`fa-solid ${item.icon} mb-2`}></i>
                  <div className="cols">
                    <h5>{item.title}</h5>
                    <p className="grey">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
