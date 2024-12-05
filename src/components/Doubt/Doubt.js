import React from 'react';
import './Doubt.css';

const Doubt = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bbeaee2c-3fcb-45cd-8cd7-ed0255c020ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully"); alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="content container-fluid p-5">
      <div className="d-flex justify-content-start align-items-center mb-4">
        <h3  className="mb-0">
          <i className="fas fa-chevron-left"></i> Doubt Clearing
        </h3>
      </div>
      <form onSubmit={onSubmit} className="row" action="mailto:sambangireshmasri2005@gmail.com" method="POST" encType="text/plain">
        <div className="col-md-8 form-section">
          <label htmlFor="subject" className="form-label">
            Select Subject
          </label><div style={{ height:'13px'}}></div>
          <select style={{width: '600px'}} className="form-select mb-3" id="subject" name="subject">
            <option>Please Select</option>
            <option>Maths</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Physical Education</option>
            <option>Hindi</option>
            <option>English</option>
          </select>
          <label htmlFor="faculty" className="form-label">
            Select Faculty
          </label><div style={{ height:'13px'}}></div>
          <select style={{width: '600px'}} className="form-select mb-3" id="faculty" name="faculty">
            <option>Please Select</option>
            <option>Andrew</option>
            <option>Nero</option>
            <option>Alexa</option>
            <option>Landrous</option>
            <option>Nick</option>
          </select><div style={{ height:'13px'}}></div>
          <textarea style={{width: '600px'}}
            className="form-control mb-3"
            placeholder="Post the doubt here ..."
            rows="10" name="doubt"
          ></textarea><div style={{ height:'13px'}}></div>
          <button type="submit" className="btn btn-outline-dark" >
            Post Doubt
          </button>
        </div>
       
          
        </form>
        <img src="./images/doubt_img.png" className="doubt-image" alt="Doubt Image"></img>
      </div>
    
  );
};

export default Doubt;
