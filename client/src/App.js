import ErrorBoundary from './errorBoundary';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PagesRoutes from './Routes/PageRoutes.jsx';
import axios from 'axios';
import TeacherList from './components/Teacher/card/TeacherList.js';
import TeacherRegistrationForm from "./components/Teacher/form/TeacherRegistrationForm.js"
import TeacherDestails from './components/Teacher/TeacherDestails.js';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = process.env.REACT_APP_AXIOS_WITH_CREDENTIALS;

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PagesRoutes />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teacher/:name" element={<TeacherDestails />} /> {/* Teacher profile route */}
            <Route path="/teachers/regform" element={<TeacherRegistrationForm/>}/>

          </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App