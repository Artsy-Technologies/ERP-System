import Calendar from '../../common/calendar/Calendar';
import './facultyLeave.css';

const FacultyLeavePage = () => {
  return (
    <main className="main-content">
        <div className="main-header">
          <h1>Faculty Portal</h1>
          <button className='request'>Request Leave</button>
        </div>

        {/* Leave Types */}
        <div className="leave-cards">
          {[
            { type: "Casual Leave", available: "05", used: "02", className: "casual-leave" },
            { type: "Sick Leave", available: "05", used: "00", className: "sick-leave" },
            { type: "Unpaid Leave", available: "00", used: "00", className: "unpaid-leave" },
            { type: "Half Leave", available: "00", used: "00", className: "half-leave" },
          ].map((leave) => (
            <div key={leave.type} className="leave-card">
              <h3 className="leave-card-title">{leave.type}</h3>
              <div className="leave-card-content">
                <div className={`leave-indicator ${leave.className}`}>
                  {leave.available}/{leave.used}
                </div>
                <div className="leave-stats">
                  <div>Available - {leave.available}</div>
                  <div>Used - {leave.used}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='table-calender'>
          {/* Leave Requests Table */}
          <div className="table-container">
            <div className="table-header">
              <h2 className="table-title">Leave Request</h2>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Type</th>
                  <th>Days</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apr 20 - Apr 21</td>
                  <td>Sick Leave</td>
                  <td>02</td>
                  <td>
                    <span className="status-badge status-pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Apr 10 - Apr 10</td>
                  <td>Casual Leave</td>
                  <td>01</td>
                  <td>
                    <span className="status-badge status-approved">Approved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
          {/* Calendar */}
          <div class="calendar">
            <Calendar />
          </div>






        </div>
    </main>
  );
}

export default FacultyLeavePage;