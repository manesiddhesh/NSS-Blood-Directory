import React from "react";
import { useNavigate } from "react-router-dom";
// import data from './dbsr.json';
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import "./Reportscss.css";



export const Reports = () => {
  const [reports_list, setreports_list] = useState([]);

  const loadReports = async () => {
    const response = await Axios.get("http://localhost:3001/get/reports");
    setreports_list(response.data);
  };
  useEffect(() => {
    loadReports();
  }, []);
  console.log(reports_list);

  const deleteReport = (id) => {
    if (window.confirm("Are you sure you want to delete the report?")) {
      Axios.delete(`http://localhost:3001/delete/reports/${id}`);
      toast.success("Report Deleted Successfully");
      setTimeout(() => loadReports(), 500);
    }
  }

  const navigate = useNavigate();

  const navigateToAddReports = () => {
    navigate("/AddReports");
  };
  console.log(reports_list);

  return (
    <>
      <div className="container" >
        <ToastContainer position="top-center" />
        <h2 align="center" className="container-header">Reports</h2>

        <p align="right">
          <button className="btn" onClick={navigateToAddReports}>
            Add Report
          </button></p>
        {/* <Link class="fa fa-plus" to="AddCampDetails">  Add</Link> */}

        <table className="styled-table" align="center">
          <thead>
            <tr>
              <th className="form-input">Sr. No.</th>
              <th className="form-input">Date</th>
              <th className="form-input">Venue</th>
              <th className="form-input">Organizer</th>
              <th className="form-input">Total Volunteers</th>
              <th className="form-input">Total Blood Units Collected</th>
              <th className="form-input">Total Beneficiaries</th>
              <th className="form-input">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports_list.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="form-input">{index + 1}</td>
                  <td className="form-input">{item.date}</td>
                  <td className="form-input">{item.venue}</td>
                  <td className="form-input">{item.organizer}</td>
                  {/* <td className="form-input">{item.totvols}</td> */}
                  <td className="form-input"><Link to={`/Attendancelist/${item.id}`}>
                                            <button className="btn btn-edit">View</button>
                                        </Link></td>
                  <td className="form-input">{item.totbd}</td>
                  <td className="form-input">{item.totbnf}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Update Report</button>
                    </Link>
                    <button className="btn btn-delete" onClick={() => deleteReport(item.id)}>Delete Report</button>
                    {/* <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link> */}
                    {/* <Link to={`/confirmAttendance/${item.id}`}>
                    <button className="btn btn-edit">Attendance</button>
                    </Link> */}
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
