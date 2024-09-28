import ErrorBoundary from './errorBoundary';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PagesRoutes from './Routes/PageRoutes.jsx';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.withCredentials = process.env.REACT_APP_AXIOS_WITH_CREDENTIALS;

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PagesRoutes />} />
          </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App