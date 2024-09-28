import Sidebar from '../../pages/Teacher/Sidebar';
import Header from '../../pages/Teacher/header';
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
