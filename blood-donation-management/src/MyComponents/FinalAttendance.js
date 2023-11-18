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
export default function FinalAttendance() {
    const [activity_list, setactivity_list] = useState([]);

    const loadActivities = async () => {
        const response = await Axios.get("http://localhost:3001/get/donecamps");
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
                    Final Attendance
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
                                        <Link to={`/Attendancelist/${item.id}`}>
                                            <button className="btn btn-edit">View Attendance of this Camp</button>
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

// import React from "react";

// export const FinalAttendance = () => {
//   return (
//     <>
//       <div className="container">
//         <h2 align="center" className="container-header">
//           Attendance of Volunteers
//         </h2>
//         <h6 align="center">
//           VENUE: DADAR STATION <br /> DATE: 26/10/2022 <br /> ORGANIZER: KEM
//           HOSPITAL <br />
//           Total Volunteers: 09
//         </h6>
//         <table className="styled-table" align="center">
//           {/* <caption>
//             VENUE: DADAR STATION <br /> DATE: 26/10/2022 <br /> ORGANIZER: KEM
//             HOSPITAL <br />
//             Total Volunteers: 09{" "}
//           </caption> */}
//           <thead>
//             <tr>
//               <th className="form-input">SR. NO.</th>
//               <th className="form-input">NAME</th>
//               <th className="form-input">ROLL NO</th>
//               <th className="form-input">Department</th>
//               <th className="form-input">Academic Year</th>
//               <th className="form-input">Year in NSS</th>
//               <th className="form-input">Action</th>
//               {/* <th className="form-input">LOCATION LOG ON </th>
//           <th className="form-input">LOCATION LOG OFF </th> */}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="form-input">01</td>
//               <td className="form-input"> Yogesh Chauhan</td>
//               <td className="form-input">20302A0001</td>
//               <td className="form-input">BSC IT.</td>
//               <td className="form-input">TY</td>
//               <td className="form-input">SY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//               {/* <td className="form-input">09:00 am</td>
//           <td className="form-input">5:00 am</td>  */}
//             </tr>
//             <tr>
//               <td className="form-input">02</td>
//               <td className="form-input">Nimish Kulkarni</td>
//               <td className="form-input">20302A0006</td>
//               <td className="form-input">BSC IT.</td>
//               <td className="form-input">SY</td>
//               <td className="form-input">SY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//               {/* <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td> */}
//             </tr>
//             <tr>
//               <td className="form-input">03</td>
//               <td className="form-input">Shubham Sawant</td>
//               <td className="form-input">20302C0019</td>
//               <td className="form-input">BMS</td>
//               <td className="form-input">FY</td>
//               <td className="form-input">FY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//               {/* <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td> */}
//             </tr>
//             <tr>
//               <td className="form-input">04</td>
//               <td className="form-input">KomalPrabhu</td>
//               <td className="form-input">20302A0039</td>
//               <td className="form-input">BMM</td>
//               <td className="form-input">SY</td>
//               <td className="form-input">FY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//               {/* <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td> */}
//             </tr>
//             <tr>
//               <td className="form-input">05</td>
//               <td className="form-input">Yash Mahadik</td>
//               <td className="form-input">20302D0049</td>
//               <td className="form-input">BBI</td>
//               <td className="form-input">TY</td>
//               <td className="form-input">SY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//               {/* <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td> */}
//             </tr>
//             <tr>
//               <td className="form-input">06</td>
//               <td className="form-input">Jatin Siyal</td>
//               <td className="form-input">20302D0029</td>
//               <td className="form-input">BAF</td>
//               <td className="form-input">FY</td>
//               <td className="form-input">FY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//               {/* <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td> */}
//             </tr>
//             <tr>
//               <td className="form-input">07</td>
//               <td className="form-input">Athharva Nayak</td>
//               <td className="form-input">20302B0019</td>
//               <td className="form-input">BSC IT.</td>
//               <td className="form-input">SY</td>
//               <td className="form-input">FY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//             </tr>
//             <tr>
//               <td className="form-input">08</td>
//               <td className="form-input">Nayan Savla</td>
//               <td className="form-input">20302C0025</td>
//               <td className="form-input">BAF</td>
//               <td className="form-input">TY</td>
//               <td className="form-input">SY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//             </tr>
//             <tr>
//               <td className="form-input">09</td>
//               <td className="form-input">Ritik Bagga</td>
//               <td className="form-input">20302D0031</td>
//               <td className="form-input">BSC IT.</td>
//               <td className="form-input">SY</td>
//               <td className="form-input">SY</td>
//               <td>
//                 <button className="btn btn-delete">Delete</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <br />
//         {/* <table align="center">
//           <caption>
//             VENUE: DADAR STATION <br /> DATE: 26/10/2022 <br /> ORGANIZER: KEM
//             HOSPITAL <br />
//             Total Volunteers: 06{" "}
//           </caption>
//           <tr>
//             <th className="form-input">SR. NO.</th>
//             <th className="form-input">NAME</th>
//             <th className="form-input">ROLL NO</th>
//             <th className="form-input">YEAR & STREAM</th>
//             <th className="form-input">LOCATION LOG ON </th>
//           <th className="form-input">LOCATION LOG OFF </th>
//           </tr>
//           <tr>
//             <td className="form-input">01</td>
//             <td className="form-input">Athharva Nayak</td>
//             <td className="form-input">20302B0019</td>
//             <td className="form-input">BSC IT.</td>
//             <td className="form-input">09:00 am</td>
//           <td className="form-input">5:00 am</td>
//           </tr>
//           <tr>
//             <td className="form-input">02</td>
//             <td className="form-input">Nayan Savla</td>
//             <td className="form-input">20302C0025</td>
//             <td className="form-input">BSC IT.</td>
//             <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td>
//           </tr>
//           <tr>
//             <td className="form-input">03</td>
//             <td className="form-input">Ritik Bagga</td>
//             <td className="form-input">20302D0031</td>
//             <td className="form-input">BSC IT.</td>
//             <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td>
//           </tr>
//           <tr>
//             <td className="form-input">04</td>
//             <td className="form-input">Sihika Shinde</td>
//             <td className="form-input">20302A0032</td>
//             <td className="form-input">BMS</td>
//             <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td>
//           </tr>
//           <tr>
//             <td className="form-input">05</td>
//             <td className="form-input">Tanish Kale</td>
//             <td className="form-input">20302B0012</td>
//             <td className="form-input">BSC IT.</td>
//             <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td>
//           </tr>
//           <tr>
//             <td className="form-input">06</td>
//             <td className="form-input">Rahul Jain</td>
//             <td className="form-input">20302A0014</td>
//             <td className="form-input">BSC IT.</td>
//             <td className="form-input">09:00 am</td>
//            <td className="form-input">5:00 am</td>
//           </tr>
//         </table> */}
//       </div>
//     </>
//   );
// };