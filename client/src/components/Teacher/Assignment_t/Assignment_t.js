import React from "react";
import "./Assignment_t.css";

const AssignmentT = () => {
  return (
    <>
      <div></div>
      <section className="content">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-header">Submitted</div>
              <div className="card-body p-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Roll Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alia</td>
                      <td>September 9, 2013</td>
                      <td>704.555.0127</td>
                    </tr>
                    <tr>
                      <td>Arlene McCoy</td>
                      <td>August 2, 2013</td>
                      <td>205.555.0100</td>
                    </tr>
                    <tr>
                      <td>Cody Fisher</td>
                      <td>September 24,2007</td>
                      <td>205.555.0100</td>
                    </tr>
                    <tr>
                      <td>Esther Howard</td>
                      <td>December 29,2017</td>
                      <td>229.555.0105</td>
                    </tr>
                    <tr>
                      <td>Ronald Richards</td>
                      <td>May 20,2015</td>
                      <td>201.555.0124</td>
                    </tr>
                    <tr>
                      <td>Albert Flores</td>
                      <td>May 31,2015</td>
                      <td>201.555.0122</td>
                    </tr>
                    <tr>
                      <td>Marvin McKinney</td>
                      <td>February 29,2012</td>
                      <td>671.555.0110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-header">In Progress</div>
              <div className="card-body p-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Roll Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alia</td>
                      <td>704.555.0127</td>
                    </tr>
                    <tr>
                      <td>Arlene McCoy</td>
                      <td>205.555.0100</td>
                    </tr>
                    <tr>
                      <td>Devon Lane</td>
                      <td>302.555.0107</td>
                    </tr>
                    <tr>
                      <td>Jenny Wilson</td>
                      <td>480.555.0320</td>
                    </tr>
                    <tr>
                      <td>Floyd Miles</td>
                      <td>302.555.0107</td>
                    </tr>
                    <tr>
                      <td>Counrtney Henry</td>
                      <td>238.555.1035</td>
                    </tr>
                    <tr>
                      <td>Ralph Edwards</td>
                      <td>303.555.0105</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div className="card-header">Due</div>
              <div className="card-body p-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Roll Number</th>
                      <th>Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alia</td>
                      <td>704.555.0127</td>
                      <td>5 Days</td>
                    </tr>
                    <tr>
                      <td>Arlene McCoy</td>
                      <td>205.555.0100</td>
                      <td>2 Days</td>
                    </tr>
                    <tr>
                      <td>Cody Fisher</td>
                      <td> 702.555.0122</td>
                      <td>5 days </td>
                    </tr>
                    <tr>
                      <td> ALbert</td>
                      <td>405.555.0107</td>
                      <td>4 days</td>
                    </tr>
                    <tr>
                      <td>Jenny Wilson</td>
                      <td>304.455.2045</td>
                      <td>4 days</td>
                    </tr>
                    <tr>
                      <td>Marvin </td>
                      <td>671.555.0101</td>
                      <td>2 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card history">
          <div className="card-header">History</div>
          <div className="card-body p-0">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Due Date</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MCQ Questions for boards</td>
                  <td>Chemistry</td>
                  <td>24-2-2024</td>
                  <td>01-3-2024</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>MCQ Questions for boards</td>
                  <td>Biology</td>
                  <td>24-2-2024</td>
                  <td>01-3-2024</td>
                  <td>
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <button class="upload-btn">Upload</button>
      </section>
    </>
  );
};
export default AssignmentT;
