import React from "react";
import Categories from "../../../components/Admin/Inventorymanagement/Categories";
import { Outlet, useLocation } from "react-router-dom";
import Inventory from "../../../components/Admin/Inventorymanagement/Inventory/Inventory";
import Complaints from "../../../components/Admin/Inventorymanagement/Complaints";
import Contacts from "../../../components/Admin/Inventorymanagement/Contacts";
import "../../../components/Admin/Inventorymanagement/inventory.css";

function Inventorymain() {
  const location = useLocation();

  const isInventoryMainPage =
    location.pathname === "/admin-dashboard/inventory";

  return (
    <>
      <div>
        <main className="main-content">
          {isInventoryMainPage ? (
            <>
              <div className="mt-4">
                <h3 className="text-gray">Inventory Management</h3>
                <Categories />

                <div className="row mt-4">
                  <div className="col-md-7">
                    <Inventory />
                  </div>
                  <div className="col-md-5">
                    <aside className="right-section">
                      <Complaints />
                      <Contacts />
                    </aside>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </>
  );
}

export default Inventorymain;
