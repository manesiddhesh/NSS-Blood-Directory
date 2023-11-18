// import React, { useState, useEffect } from 'react'
// import Axios from 'axios';
// import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
// import './AddReports.css';
// import { toast } from "react-toastify";
// import { ToastContainer } from 'react-toastify';
// // const initialState = {
// //   date: "",
// //   venue: "",
// //   organizer: "",
// //   totvols: "",
// //   totbd: "",
// //   totbnf: "",
// // } ;

// export const AddReports = () => {

//   const [date, setdate] = useState(""); 
//   const [venue, setvenue] = useState("");
//   const [organizer, setorganizer] = useState("");
//   const [totvols, settotvols] = useState("");
//   const [totbd, settotbd] = useState("");
//   const [totbnf, settotbnf] = useState("");

//   // const [reports_list, setreports_list] = useState([]);

//   const handleSubmit = (e) => {
//     // e.preventDefault();
//     if(!date || !venue || !organizer || !totvols || !totbd || !totbnf ){
//       toast.error("Please provide values into each input field");
//     }else{

//     Axios.post("http://localhost:3001/insert/reports",{
// date: date,
// venue: venue,
// organizer: organizer,
// totvols: totvols,
// totbd: totbd,
// totbnf: totbnf,

//     }, toast.success("Reports Inserted Successfully"))
//   }
//   };
//   const{id}= useParams();

//   useEffect(() => {
//     Axios.get(`http://localhost:3001/insert/reports/${id}`).then((resp) => setState({...resp.reports[0]}))
//   }, [id])


//   // const navigate = useNavigate();

//   // const navigateToReports = () => {
//   //   navigate("/Reports");
//   // };

//   const[state, setState] = useState();
//   // const {date, venue, organizer, totvols, totbd, totbnf } = state;
//   // const history = useHistory();

//   // const handleSubmit = (e)=>{
//     // e.preventDefault();
//     // if(!date || !venue || !organizer || !totvols || !totbd || !totbnf ){
//     //   toast.error("Please provide values into each input field");
//     // } else{
//   //     Axios.post("http://localhost:3001/insert/reports", {
//   //       date, venue, organizer, totvols, totbd, totbnf 
//   //     }).then(() =>{
//   //       setState({date: "", venue: "", organizer: "", totvols: "", totbd: "", totbnf: "" })
//   //     }).catch((err) => toast.error(err.response.data));
//   //     setTimeout(() => navigateToReports,500);
//   //   }
//   // };

//   // const (e)=>setState(e.target.value) = (e)=>{
//   //   const { name, value } =e.target;
//   //   setState({...state, [name]: value});
//   // }
//   return (
//     <>
//       {/* <div className="container">
//      <h2 align='center'>Add Reports</h2>
//          <form align='center'>
//              <table  align='center'>

//  <tr>
//  <td><label className='form-group'>Date</label></td>
//  <td>
//    <input 
//    className='form-control' 
//    type="date"
//    required
//    value={date || ""}
//    onChange={(e) => setdate(e.target.value)}
//    />
//  </td>
//  </tr>

//  <tr>
//  <td><label className='form-group'>Venue</label></td>
//  <td>
//    <input 
//    className='form-control' 
//    type="text"
//    required
//    value={venue || ""}
//    onChange={(e) => setvenue(e.target.value)}
//    />
//  </td>
//  </tr>

//  <tr>
//  <td><label className='form-group'>Organizer</label></td>
//  <td>
//    <input 
//    className='form-control' 
//    type='text'
//    required
//    value={organizer  || ""}
//    onChange={(e) => setorganizer(e.target.value)}
//    />
//  </td>
//  </tr>

//  <tr>
//  <td><label className='form-group'>Total Volunteers</label></td>
//  <td>
//    <input 
//    className='form-control' 
//    type='text'
//    required
//    value={totvols || ""}
//    onChange={(e) => settotvols(e.target.value)}
//    />
//  </td>
//  </tr>

//  <tr>
//  <td><label className='form-group'>Total Blood Units Collected</label></td>
//  <td>
//    <input 
//    className='form-control' 
//    type='text'
//    required
//    value={totbd || ""}
//    onChange={(e) => settotbd(e.target.value)}
//    />
//  </td>
//  </tr>

//  <tr>
//  <td><label className='form-group'>Total Beneficiaries</label></td>
//  <td>
//    <input 
//    className='form-control' 
//    type='text'
//    required
//    value={totbnf || ""}
//    onChange={(e) => settotbnf(e.target.value)}
//    />
//  </td>
//  </tr>


//              </table>


//              <button className='btn' onClick={handleSubmit}>Add Report</button>
//              <Link to="/Reports">
//               <button className='btn' >Back to Reports</button>
//              </Link>
//          </form>

//      </div> */}




//       {/* code with vishal*/}
// <div style={{ marginTop: "20px" }}>
// <ToastContainer position="top-center"/>
//         <form style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center"
//         }}
//           onSubmit={handleSubmit}
//         >
//           <label htmlFor='date'>Date</label>
//           <input
//             type="date"
//             id='date'
//             name='date'
//             required
//             value={date || ""}
//             onChange={(e) => setdate(e.target.value)}
//           />

//           <label htmlFor='venue'>Venue</label>
//           <input
//             type="text"
//             id='venue'
//             name='venue'
//             required
//             placeholder='Enter the Venue...'
//             value={venue || ""}
//             onChange={(e) => setvenue(e.target.value)}
//           />

//           <label htmlFor='organizer'>Organizer</label>
//           <input
//             type="text"
//             id='organizer'
//             name='organizer'
//             required
//             placeholder='Enter the Organizer...'
//             value={organizer || ""}
//             onChange={(e) => setorganizer(e.target.value)}
//           />

//           <label htmlFor='totvols'>Total Volunteers</label>
//           <input
//             type="number"
//             id='totvols'
//             name='totvols'
//             required
//             placeholder='Enter Total Volunteers...'
//             value={totvols || ""}
//             onChange={(e) => settotvols(e.target.value)}
//           />

//           <label htmlFor='totbd'>Total Blood Units Collected</label>
//           <input
//             type="number"
//             id='totbd'
//             name='totbd'
//             required
//             placeholder='Enter Total Blood Units Collected..'
//             value={totbd || ""}
//             onChange={(e) => settotbd(e.target.value)}
//           />

//           <label htmlFor='totbnf'>Total Beneficiaries</label>
//           <input
//             type="number"
//             id='totbnf'
//             name='totbnf'
//             required
//             placeholder='Enter Total Beneficiaries...'
//             value={totbnf || ""}
//             onChange={(e) => settotbnf(e.target.value)}
//           />

//           <input type="submit" value="Save"/>
//           <Link to="/Reports">
//               <input type="button" value="Back to Reports"/>
//              </Link>

//         </form>




//       </div>
//     </>
//   )
// }

import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddReports.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const initialState = { date: '', venue: '', organizer: '', volunteers_needed: 0, totbd: 0, totbnf: 0 }

const AddReports = () => {

  // const [state, setState] = useState(initialState);

  // const { date, venue, organizer, volunteers_needed, totbd, totbnf } = state;

  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [volunteers_needed, setVolunteersNeeded] = useState(0);
  const [totbd, settotbd] = useState();
  // const [totbnf, settotbnf] = useState();



  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {

    axios

      .get(`http://localhost:3001/get/reports/${id}`)
      .then((resp) => {
        setDate(resp.data[0].date);
        setOrganizer(resp.data[0].organizer);
        setVenue(resp.data[0].venue);
        setVolunteersNeeded(resp.data[0].volunteers_needed);

      });

  }, [id]);
  console.log(totbd);


  const handleSubmit = (e) => {
    // const { name, value } = e.target;
    // setState({ ...state, [name]: value });

    e.preventDefault();

    if (!date || !venue || !organizer || !volunteers_needed || !totbd) {

      toast.error("Please provide value into each input field");

    } else {

      if (!id) {

        axios.post("http://localhost:3001/insert/reports", {
          date,
          venue,
          organizer,
          volunteers_needed,
          totbd,
        }).then(() => {

          toast.success("Report Added Successfully");
        })

          .catch((err) => toast.error(err.response.data));


      } else {
        axios.put(`http://localhost:3001/update/reports/${id}`, {
          date,
          venue,
          organizer,
          volunteers_needed,
          totbd,
        })
          .then(() => {

            toast.success("Report Updated Successfully");
          })

          .catch((err) => toast.error(err.response.data));
        setTimeout(() => {

          window.location.href = `/update/${id}`;
        }, 1500)
      }
      setTimeout(() => navigate.push("/Reports"), 500);
    }

  };

  // const (e)=>setState(e.target.value) = (e) => {

  //   console.log(name, value);

  // };

  // console.log(state);
  return (
    <div style={{ marginTop: "20px" }}>
      <ToastContainer position="top-center" />
      <h2 align="center" className="container-header">Add/Update Reports</h2>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='date'>Date</label>
        <input
          type="date"
          id='date'
          name='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor='venue'>Venue</label>
        <input
          type="text"
          id='venue'
          name='venue'
          placeholder='Enter the Venue...'
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />

        <label htmlFor='organizer'>Organizer</label>
        <input
          type="text"
          id='organizer'
          name='organizer'
          placeholder='Enter the Organizer...'
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
        />

        <label htmlFor='totvols'>Total Volunteers</label>
        <input
          type="number"
          id='totvols'
          name='totvols'
          placeholder='Enter Total Volunteers...'
          value={volunteers_needed}
          onChange={(e) => setVolunteersNeeded(e.target.value)}
        />

        <label htmlFor='totbd'>Total Blood Units Collected</label>
        <input
          type="number"
          id='totbd'
          name='totbd'
          placeholder='Enter Total Blood Units Collected..'
          value={totbd}
          onChange={(e) => { settotbd(e.target.value); }}
        />
        <label htmlFor='totbnf'>Total Beneficiaries</label>
        <input
          type="number"
          id='totbnf'
          name='totbnf'
          placeholder='Enter Total Beneficiaries...'
          value={totbd * 3}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/Reports">
          <input type="button" value="Go Back to Reports" />
        </Link>
      </form>

    </div>

  );

};

export default AddReports;