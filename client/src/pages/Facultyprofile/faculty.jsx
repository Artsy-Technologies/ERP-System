import SettingsSidebar from '../../components/FacultyLeave/components/settings';
import ProfileForm from '../../components/FacultyLeave/components/profileform';
import Sidebar from '../pages/Teacher/Sidebar';

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
