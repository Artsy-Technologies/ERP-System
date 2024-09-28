import './settings.css';

const SettingsSidebar = () => {
  return (
    <div className="settings-sidebar">
      <ul className="settings-links">
        <li><strong>Edit Profile</strong></li>
        <li><strong>Notification</strong></li>
        <li><strong>Appearance</strong></li>
        <li><strong>Help</strong></li>
      </ul>
    </div>
  );
};

export default SettingsSidebar;