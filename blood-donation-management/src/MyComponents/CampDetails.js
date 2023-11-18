import React from "react";
// import './Reports.css';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// import { AddCampDetails } from './MyComponents/AddCampDetails'

export const CampDetails = () => {
  const [activity_list, setactivity_list] = useState([]);

  const loadActivities = async () => {
    const response = await Axios.get("http://localhost:3001/get/upcmgcamps");
    setactivity_list(response.data);
  };

  useEffect(() => {
    loadActivities();
  }, []);

  const deleteCamp = (id) => {
    if (window.confirm("Are you sure you want to cancel the camp?")) {
      Axios.delete(`http://localhost:3001/delete/camp/${id}`);
      toast.success("Camp Canceled Successfully");
      setTimeout(() => loadActivities(), 500);
    }
  }

  const handleCampStatus = (id) => {
    if (window.confirm("Are you sure you want to set the camp status as Completed?")) {
    let camp = activity_list.filter((data) => {
      return data.id === id;
    })
    console.log(camp);
    Axios.post(`http://localhost:3001/setCmpDone/${id}`, camp)
      .then((result) => {
        console.log(result);
        toast.success("Camp Status updated Successfully!");
        window.location.href = `http://localhost:3000/CampDetails`;
      }).catch((err) => {
        toast.error(`Oops! Something went wrong while updating camp status with ID ${id} error is : ${err.message}`);
      })
  }
}
  // const navigate = useNavigate();

  // const navigateToAddCampDetails = () => {
  //   navigate("/AddCampDetails");
  // };

  // const [img, setImg] = useState();

  // const onImageChange = (e) => {
  //   const [file] = e.target.files;
  //   setImg(URL.createObjectURL(file));
  // };
  // const [img1, setimg1] = useState();
  // const onImageChange1 = (e) => {
  //   const [file] = e.target.files;
  //   setimg1(URL.createObjectURL(file));
  // };
  // const [img2, setimg2] = useState();
  // const onImageChange2 = (e) => {
  //   const [file] = e.target.files;
  //   setimg2(URL.createObjectURL(file));
  // };

  return (
    <>
      <div className="container" align="center">
        <ToastContainer position="top-center" />
        <h2 align="center" className="container-header">
          Upcoming Camp Details
        </h2>
        {/* <button id="btncss" className="btn" onClick={navigateToAddCampDetails}>
          Add Camp
        </button> */}
        <br/>
        <table className="styled-table">
          <thead>
            <tr>
              <th className="form-input">ID</th>
              <th className="form-input">Date</th>
              <th className="form-input">Venue</th>
              <th className="form-input">Organizer</th>
              <th className="form-input">Volunteers Needed</th>
              <th className="form-input">Actions</th>
              {/* <th className="form-input">Upload Flyer</th> */}
            </tr>
          </thead>
          <tbody>
            {activity_list.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="form-input">{index + 1}</td>
                  <td className="form-input">{item.date}</td>
                  <td className="form-input">{item.venue}</td>
                  <td className="form-input">{item.organizer}</td>
                  <td className="form-input">{item.volunteers_needed}</td>
                  <td>
                    <Link to={`/updatecamp/${item.id}`}>
                      <button className="btn btn-edit">Update Camp</button>
                    </Link>
                    <button className="btn btn-delete" onClick={() => deleteCamp(item.id)}>Cancel Camp</button>
                    <Link to={`/VolunteerConfirmationTab/${item.id}`}>
                      <button className="btn btn-edit">Register as Volunteer</button>
                    </Link>
                    {/* <Link to={`/viewcamp/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link> */}
                    <button className="btn btn-success" id={item.id} onClick={() => handleCampStatus(item.id)}>Camp Completed</button>
                    <Link to={`/AttendanceTab/${item.id}`}>
                      <button className="btn btn-edit">Mark Attendance</button>
                    </Link>                  
                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
// INSERT INTO blood_directory.activities (id,date,name,venue,organizer,volunteer_needed) VALUES(1,"26-01-2023","Polio Drive","Antophill","BMC",40);
