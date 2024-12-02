import VideoGrid from './components/videogrid';
import ActionButtons from './components/action';
import './virtual_class.css';
const VirtualPage = () => {
  return (
    <div className="App">
      <div className='app-container'>
        <div className='main-content'>
          <VideoGrid />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}

export default VirtualPage;
