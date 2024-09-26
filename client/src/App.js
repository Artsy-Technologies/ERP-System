import ErrorBoundary from './errorBoundary';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PagesRoutes from './Routes/PageRoutes.jsx';
import ErrorRoutes from './Routes/ErrorRoutes.jsx';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true;

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PagesRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App