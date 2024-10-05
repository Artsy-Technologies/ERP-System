import { FaTachometerAlt, FaChalkboardTeacher, FaUserGraduate, FaMoneyBill, FaBus, FaWarehouse } from 'react-icons/fa';

export const sidebar = {
  "sidebarItems": [
    {
      "text": "Dashboard",
      "link": "/dashboard",
      "icon": <FaTachometerAlt />
    },
    {
      "text": "Teacher",
      "link": "/teacher",
      "icon": <FaChalkboardTeacher />
    },
    {
      "text": "Students",
      "link": "/students",
      "icon": <FaUserGraduate />
    },
    {
      "text": "Finance",
      "link": "/finance",
      "icon": <FaMoneyBill />
    },
    {
      "text": "Transport",
      "link": "/transport",
      "icon": <FaBus />
    },
    {
      "text": "Inventory Management",
      "link": "/inventory",
      "icon": <FaWarehouse />
    }
  ]
}
