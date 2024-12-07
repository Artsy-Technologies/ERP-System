import { FaTachometerAlt, FaChalkboardTeacher, FaUserGraduate, FaMoneyBill, FaBus, FaWarehouse } from 'react-icons/fa';

export const sidebar = {
  "sidebarItems": [
    {
      "text": "Dashboard",
      "link": "admin-dashboard/",
      "icon": <FaTachometerAlt />
    },
    {
      "text": "Teacher",
      "link": "admin-dashboard/teacher",
      "icon": <FaChalkboardTeacher />
    },
    {
      "text": "Students",
      "link": "admin-dashboard/students",
      "icon": <FaUserGraduate />
    },
    {
      "text": "Finance",
      "link": "admin-dashboard/finance",
      "icon": <FaMoneyBill />
    },
    {
      "text": "Transport",
      "link": "admin-dashboard/transport",
      "icon": <FaBus />
    },
    {
      "text": "Inventory Management",
      "link": "admin-dashboard/inventory",
      "icon": <FaWarehouse />
    }
  ]
}
