import Sidebar from '../Sidebar/Sidebar.js';
import Header from '../Header/Header.js';
import VideoGrid from './components/videogrid';
import ActionButtons from './components/action';
import './virtual_class.css';
const VirtualPage = () => {
  return (
    <div className="App">
      <div className='app-container'>
        <Sidebar />
        <div className='main-content'>
          <Header />
          <VideoGrid />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default VirtualPage;
