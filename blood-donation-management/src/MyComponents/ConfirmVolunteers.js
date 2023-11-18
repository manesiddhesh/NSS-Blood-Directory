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
export default function ConfirmVolunteers() {
    const [activity_list, setactivity_list] = useState([]);

    const loadActivities = async () => {
        const response = await Axios.get("http://localhost:3001/get/upcmgcamps");
        setactivity_list(response.data);
    };
    useEffect(() => {
        loadActivities();
    }, []);
    return (
        <>
            <div className="container" align="center">
                <ToastContainer position="top-center" />
                <h2 align="center" className="container-header">
                    Confirm Volunteers
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
                            <th className="form-input">Action</th>
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
                                        <Link to={`/confirmVolunteers/${item.id}`}>
                                            <button className="btn btn-edit">CONFIRM VOLUNTEERS</button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
