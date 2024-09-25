import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.js'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import StudentProfile from "./components/student teacher profile/StudentProfile.jsx"
import TeacherProfile from './components/student teacher profile/TeacherProfile.jsx'
import Digiatal_Library_MainPage from './components/DigitalLibrary/digital_library_main_page.jsx'
import HistoryBookList from './components/DigitalLibrary/Historybooklist.jsx';
import DueBookList from './components/DigitalLibrary/DueBookList.jsx'
// Routes
const router = createBrowserRouter([

  { path: "/student-profile", element: <StudentProfile/>},
  { path: "/teacher-profile", element: <TeacherProfile/>},
  { path: "/d_library", element: <Digiatal_Library_MainPage/>},

  {path: "/history-booklist", element: <HistoryBookList/>},
  {path: "/due_book_list_page" , element: <DueBookList/>}


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}/>


  </React.StrictMode>
);
