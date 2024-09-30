import ErrorBoundary from './errorBoundary';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PagesRoutes from './Routes/PageRoutes.jsx';
import axios from 'axios';
import TeacherList from './components/Teacher/card/TeacherList.js';
import ProfileList from './components/Teacher/profilecard/ProfileList.js';
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = process.env.REACT_APP_AXIOS_WITH_CREDENTIALS;

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PagesRoutes />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teacher/:name" element={<ProfileList />} /> {/* Teacher profile route */}

          </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App