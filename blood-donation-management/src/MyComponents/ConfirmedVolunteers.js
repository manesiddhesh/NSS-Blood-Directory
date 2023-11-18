import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export const ConfirmedVolunteers = () => {

  const [registeredVolunteers, setRegisteredVolunteers] = useState([]);
  const [approvedVolunteers, setApprovedVolunteers] = useState([]);
  const [campDetails, setCampDetails] = useState([]);
  const [approved, setApproved] = useState(false);
  const { campId } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const refBtn = useRef();

  const loadRegisteredVolunteers = async () => {
    let response = await Axios.get(`http://localhost:3001/registeredVolunteers/${campId}`);
    let campDetails = await Axios.get(`http://localhost:3001/getCamp/${campId}`);
    let registeredApproved = await Axios.get(`http://localhost:3001/registeredVolunteers/${campId}/approved`);
    setApproved(registeredApproved?.data)
    setRegisteredVolunteers(response?.data);
    setCampDetails(campDetails?.data);
  }
  // const loadApprovedVolunteers = async () => {
  //   let response = await Axios.get(`http://localhost:3001/approvedVolunteers/${campId}`);
  //   setApprovedVolunteers(response.data)
  // }
  const handleApprove = async (status, id) => {
    Axios.put(`http://localhost:3001/approveRegisteredVolunteers/${id}/${status}`, {
      id,
      status
    }).then(() => {
      if (status === "approved") {
        toast.success("Volunteer Approved Successfully");
        loadRegisteredVolunteers();
      } else {
        loadRegisteredVolunteers();
        toast.error("Volunteer rejected");
      }
    })
      .catch((err) => toast.error(err.response.data));
  }
  useEffect(() => {
    // loadApprovedVolunteers();
    loadRegisteredVolunteers();
  }, [])
  return (
    <>
      <div className="container">
        <h2 align="center" className="container-header">
          Confirm Volunteers
        </h2>
        <ToastContainer />
        {
          campDetails.map((data) => {
            return (
              <>
                <h6 align="center">Venue: {data.venue}<br /> Date: {data.date.replaceAll('-', '/')} <br /> Organizer: {data.organizer}<br />
                  Total Volunteers Needed: {data.volunteers_needed} <br/>Total Registrations: {registeredVolunteers.length}</h6>

                <h6>Approved: {approved.length}/{registeredVolunteers.length}</h6>
              </>
            )
          })
        }

        <table className="styled-table" align="center">
          <thead>
            <tr>
              <th className="form-input">SR. NO.</th>
              <th className="form-input">NAME</th>
              <th className="form-input">ROLL NO</th>
              <th className="form-input">Department</th>
              <th className="form-input">Academic Year</th>
              <th className="form-input">Year in NSS</th>
              <th className="form-input">Action</th>
              {/* <th className="form-input">LOCATION LOG ON </th>
          <th className="form-input">LOCATION LOG OFF </th> */}
            </tr>
          </thead>
          <tbody>
            {
              registeredVolunteers.map((data, index) => {
                return (
                  <tr>
                    <td className="form-input">{index + 1}</td>
                    <td className="form-input">{data.name}</td>
                    <td className="form-input">{data.rollNo}</td>
                    <td className="form-input">{data.department}</td>
                    <td className="form-input">{data.academicYear}</td>
                    <td className="form-input">{data.yearInNSS}</td>
                    <td>
                      <button className="btn btn-edit" onClick={() => { handleApprove("approved", data.id) }} ref={refBtn}>Approve</button>
                      <button className="btn btn-delete" onClick={() => { handleApprove("rejected", data.id) }} ref={refBtn}>Reject</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


        <br />
        <hr />
        <h2 align="center" className="container-header">
          Confirmed Volunteers
        </h2>
        <table className="styled-table" align="center">
          <thead>
            <tr>
              <th className="form-input">SR. NO.</th>
              <th className="form-input">NAME</th>
              <th className="form-input">ROLL NO</th>
              <th className="form-input">Department</th>
              <th className="form-input">Academic Year</th>
              <th className="form-input">Year in NSS</th>
              <th className="form-input">Action</th>
              {/* <th className="form-input">LOCATION LOG ON </th>
          <th className="form-input">LOCATION LOG OFF </th> */}
            </tr>
          </thead>
          <tbody>
            {
              approved && approved?.map((data, index) => {
                return (
                  <tr>
                    <td className="form-input">{index + 1}</td>
                    <td className="form-input">{data.name}</td>
                    <td className="form-input">{data.rollNo}</td>
                    <td className="form-input">{data.department}</td>
                    <td className="form-input">{data.academicYear}</td>
                    <td className="form-input">{data.yearInNSS}</td>
                    <td>
                      <button className="btn btn-edit" onClick={() => { handleApprove("approved", data.id) }} ref={refBtn}>Approve</button>
                      <button className="btn btn-delete" onClick={() => { handleApprove("rejected", data.id) }} ref={refBtn}>Reject</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </>
  );
};


//flyercode
// import React, { Component } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form, Row, Col, Button } from 'react-bootstrap';
// import Axios from 'axios'
// import xImg from '../img/a.jpg'

// class MyAdminArea extends React.Component {
//   state =
//     {
//       myID: 0,
//       empName: 'none',
//       Arr1: [],
//       file_detail: null
//     }
//   Base64 = null
//   Submitdata = () => {
//     const FD = new FormData()
//     FD.append('upload_file', this.state.file_detail)
//     Axios.post('http://localhost:3001/imageupload', FD)

//     let str1 = "INSERT INTO upload_flyer VALUES('" + this.state.myID + "', '" + this.state.empName + "', ? )"
//     Axios.post('http://localhost:3001/api/NonQuery_img', { mySQL: str1, myImg: xImg })
//   }

//   componentWillMount() {
//     this.ReadData()
//   }

//   ReadData = () => {
//     let str1 = "SELECT * FROM upload_flyer"
//     Axios.get('http://localhost:3001/api/DataQuery', { params: { sql: str1 } }).then(
//       (res) => {
//         this.setState({ Arr1: res.data })
//       }
//     )
//   }

//   render() {
//     return( <div>

//       <Form>
//         <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">
//           <Col sm="3 m-1">
//             <Form.Control size="lg" type="text" placeholder="Enter ID" onChange={(e) => this.setState({ myID: e.target.value })} />
//           </Col>

//           <Col sm="4 m-1">
//             <Form.Control size="lg" type="text" placeholder="Enter Name" onChange={(e) => this.setState({ empName: e.target.value })} />
//           </Col>

//           <Col sm="3 m-1">
//             <Form.Control size='lg' type="file" onChange={(e) => this.setState({ file_detail: e.target.files[0] })} />
//           </Col>

//           <Col sm="1 m-3" align='right'>
//             <Button size='lg' variant="primary" onClick={this.Submitdata}>
//               Submit
//             </Button>
//           </Col>

//         </Form.Group>
//       </Form>
//       {/* {this.state.myID}
//             {this.state.empName} */}
//       <img src={xImg} alt="Flyer" width ="350px"/>
//       <Form>
//         <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">

//           {/* {this.state.Arr1.map((val) =>
//             <Col sm="1 m-1">
//               {this.Base64 = new Buffer (val.myImg, 'Base64')}
//               <img width='150px' src={this.Base64} ></img>
//               <b>ID: {val.ID}</b>
//               <div>Name: {val.empName}</div>
//             </Col>
//           )} */}

//         </Form.Group>
//       </Form>
//     </div>
//     );
//   }
// }

// export default MyAdminArea;