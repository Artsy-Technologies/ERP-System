import ErrorBoundary from './errorBoundary';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PagesRoutes from './Routes/PageRoutes.jsx';
import axios from 'axios';
import FormPage from './pages/AdmissionForm/AdmissionForm.jsx';
import Student from './pages/Student/student.jsx';
import Teacher from './pages/Teacher/teacher.jsx';
import Signup from './pages/signup/signup.jsx';
import VirtualPage from './components/Virtualclass/virtualclasseffff.js';
import FacultyPage from './components/Facultyleave/facultyfff.js';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = process.env.REACT_APP_AXIOS_WITH_CREDENTIALS;

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PagesRoutes />} />
            <Route path="/form" element={<FormPage/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/teacher" element={<Teacher/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/virtualclass" element={<VirtualPage/>} />
            <Route path="/faculty" element={<FacultyPage/>} />
          </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App