import React from "react";
import Categories from "../../../../components/Admin/Inventorymanagement/Categories";
import Inventory from "../../../../components/Admin/Inventorymanagement/Inventory/Inventory";
import Complaints from "../../../../components/Admin/Inventorymanagement/Complaints";
import Contacts from "../../../../components/Admin/Inventorymanagement/Contacts";
import "../../../../components/Admin/Inventorymanagement/inventory.css";

function Inventorymain() {
  return (
    <>
    <div className="p-12">
      <h1 className="text-red">Inventory Management</h1>
      <Categories />
      <main className="main-content">
        <Inventory /> {/* Display Inventory and Asset History */}
        <aside className="right-section">
          <Complaints /> {/* Display Complaints */}
          <Contacts /> {/* Display Maintenance Contacts */}
        </aside>
      </main>
      </div>
    </>
  );
}

export default Inventorymain;
