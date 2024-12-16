import React from 'react';
import './Assignment.css';

const Assignment=() => {
    return(
        <div className="_container-fluid">
        <div className="row">
            <div className="col-md-1">
                </div>
            <div className="col-md-8">
            <h3  className="mb-0">
          <i className="fas fa-chevron-left"></i> Assignment
        </h3><br></br><br></br>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"></input>
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filters
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Filter 1</a></li>
                            <li><a className="dropdown-item" href="#">Filter 2</a></li>
                        </ul>
                    </div>
                </div>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Documents</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Submission</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="bi bi-file-pdf"></i>MCQs Questions for boards</td>
                            <td>Chemistry</td>
                            <td>24-02-2024</td>
                            <td>01-03-2024</td>
                            <td><button className="btn btn-sm btn-success">Submitted</button></td>
                            <td><button className="btn btn-sm btn-primary">Upload</button></td>
                        </tr>
                        <tr>
                            <td><i className="bi bi-file-pdf"></i> 10 mark Questions for boards</td>
                            <td>Social Studies</td>
                            <td>14-02-2024</td>
                            <td>01-03-2024</td>
                            <td><button className="btn btn-sm btn-danger">Due</button></td>
                            <td><button className="btn btn-sm btn-primary">Upload</button></td>
                        </tr>
                        <tr>
                            <td><i className="bi bi-file-pdf"></i> Short Questions for boards</td>
                            <td>Hindi</td>
                            <td>24-02-2024</td>
                            <td>03-03-2024</td>
                            <td><button className="btn btn-sm btn-warning">Pending</button></td>
                            <td><button className="btn btn-sm btn-primary">Upload</button></td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    </div>
    );

};

export default Assignment;