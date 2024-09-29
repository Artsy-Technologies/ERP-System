import React, { useState } from 'react';
import '../inventory.css';

const Contacts = () => {
  const [visibleContact, setVisibleContact] = useState(null);

  const toggleContact = (contactId) => {
    setVisibleContact(visibleContact === contactId ? null : contactId);
  };

  return (
    <div className="contacts">
      <center><h3>Maintenance Contacts</h3></center>
      <ul>
        <li>
          <span onClick={() => toggleContact('electrician-contact')}>Electrician</span>
          {visibleContact === 'electrician-contact' && <div>Contact: 123-456-7890</div>}
        </li>
        <li>
          <span onClick={() => toggleContact('furniture-contact')}>Furniture</span>
          {visibleContact === 'furniture-contact' && <div>Contact: 987-654-3210</div>}
        </li>
        {/* More contacts */}
      </ul>
      <button className="contact-main-btn">Contact</button>
    </div>
  );
};

export default Contacts;
