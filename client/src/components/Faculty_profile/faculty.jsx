import SettingsSidebar from './components/settings';
import ProfileForm from './components/profileform';
import Sidebar from '../Sidebar/Sidebar.js';

const FacultyPage = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <SettingsSidebar />
      <div className="main-content">
        <ProfileForm />
      </div>
    </div>
  );
}

export default FacultyPage;
