import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const AttendanceTab = () => {
  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");
  // const [stream, setstream] = useState("");
  const [yearinnss, setyearinnss] = useState("");
  const [academicYear, setAcademicYear] = useState(""),
    [department, setDepartment] = useState("");
  // const [registered, setRegistered] = useState([]);
  // const [totbd, settotbd] = useState("");
  // const [totbnf, settotbnf] = useState("");
  // const [insta, setinsta] = useState("");

  // const [reports_list, setreports_list] = useState([]);
  const { Id } = useParams();

  // const getRegisteredVolunteer = async () => {
  //   const response = await Axios.get(`http://localhost:3001/getRegisteredVolunteer/${rollno}`);
  //   setRegistered(response.data);
  // }



  const handleSubmit = async (e) => {
    e.preventDefault();
    // await getRegisteredVolunteer();
    const volunteerObj = {
      name,
      rollno,
      yearinnss,
      academicYear,
      department,
    }
    Axios.post(`http://localhost:3001/AttendanceTab/${Id}`,
      volunteerObj,
      // ValidityState : 
    ).then((result) => {
      toast.success(`Attendance marked Successfully! `);
      console.log(result);
    }).catch((err) => {
      if (err.response.status === 409) {
        toast.error("Oops ! Error marking Attendance");
      } else {
        toast.err(err.message);
      }
    })

  }
return (
  <>
        <div className="container">
        <h2 align="center" className="container-header">
          Attendance Tab
        </h2>

        <ToastContainer />
        <form onSubmit={handleSubmit} align="center">
          <table align="center">
            <tr>
              <td align='left'><label className='form-group'>Full Name :</label></td>
              <td align='left'>
                <input
                  className='form-control'
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="form-input">
                <label className="form-group">Roll no : </label>
              </td>
              <td className="form-input">
                <input
                  className="form-control"
                  type="text"
                  required
                  value={rollno}
                  onChange={e => { setrollno(e.target.value) }}
                />
              </td>
            </tr>

            {/* <tr>
             <td align='left'><label className='form-group'>Stream</label></td>
             <td align='left'>
               <input 
               className='form-control' 
               type='text'
               required
               value={stream}
               onChange={(e) => setstream(e.target.value)}
               />
             </td>
             </tr> */}

            <tr>
              <td className="form-input">
                <label className="form-group">Year in NSS : </label>
              </td>
              <td className="form-input">
                <select
                  className="form-control"
                  required
                  value={yearinnss}
                  onChange={(e) => setyearinnss(e.target.value)}
                >
                  <option selected>Select</option>
                  <option>First Year</option>
                  <option>Second Year</option>
                </select>
              </td>

            </tr>
            <tr>
              <td className="form-input">
                <label className="form-group">Academic Year : </label>
              </td>
              <td className="form-input">
                <select
                  className="form-control"
                  required
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                >
                  <option selected>Select</option>
                  <option>FY</option>
                  <option>SY</option>
                  <option>TY</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="form-input">
                <label className="form-group">Department : </label>
              </td>
              <td className="form-input">
                <input
                  className="form-control"
                  type="text"
                  required
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </td>
            </tr>

            {/* <tr>
             <td align='left'><label className='form-group'>Total Blood Units Collected</label></td>
             <td align='left'>
               <input 
               className='form-control' 
               type='text'
               required
               value={totbd}
               onChange={(e) => settotbd(e.target.value)}
               />
             </td>
             </tr>

             <tr>
             <td align='left'><label className='form-group'>Total Beneficiaries</label></td>
             <td align='left'>
               <input 
               className='form-control' 
               type='text'
               required
               value={totbnf}
               onChange={(e) => settotbnf(e.target.value)}
               />
             </td>
             </tr> */}

            {/* <tr>
             <td align='left'><label className='form-group'>Instagramm Link</label></td>
             <td align='left'>
               <input 
               className='form-control' 
               type='text'
               required
               value={insta}
               onChange={(e) => setinsta(e.target.value)}
               />
             </td>
             </tr> */}
          </table>

          <button className="btn" onSubmit={handleSubmit}>Mark my Attendance for this activity</button>
        </form>
      </div>
  </>
)
}