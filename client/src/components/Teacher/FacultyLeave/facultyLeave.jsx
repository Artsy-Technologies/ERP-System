import SettingsSidebar from './components/settings.jsx';
import ProfileForm from './components/profile.jsx';

const FacultyPage = () => {
  return (
    <div className="app-container">
      <SettingsSidebar />
      <div className="main-content">
        <ProfileForm />
      </div>
    </div>
  );
}

export default FacultyPage;