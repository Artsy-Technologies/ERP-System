import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from '../../../../components/Admin/Inventorymanagement/Categories';
import Inventory from '../../../../components/Admin/Inventorymanagement/Inventory/Inventory';
import Complaints from '../../../../components/Admin/Inventorymanagement/Complaints';
import Contacts from '../../../../components/Admin/Inventorymanagement/Contacts';
import LabEquipment from '../../../../components/Admin/Inventorymanagement/labs/LabEquipment';
import FurnitureInventory from '../../../../components/Admin/Inventorymanagement/furniture/Furniture';
import ElectricalsInventory from '../../../../components/Admin/Inventorymanagement/electricals/Electricals';
import PlumbingInventory from '../../../../components/Admin/Inventorymanagement/plumber/Plumbing';
import SportsInventory from '../../../../components/Admin/Inventorymanagement/sports/SportsEquipment';
import Maintenance from '../../../../components/Admin/Inventorymanagement/maintenance/Maintenance';
import '../../../../components/Admin/Inventorymanagement/inventory.css'

function Inventorymain() {
  return (
    
            <>
              <Categories />
              <main className="main-content">
                <Inventory /> {/* Display Inventory and Asset History */}
                <aside className="right-section">
                  <Complaints /> {/* Display Complaints */}
                  <Contacts />   {/* Display Maintenance Contacts */}
                </aside>
              </main>
            </>
         
  );
}

export default Inventorymain;
