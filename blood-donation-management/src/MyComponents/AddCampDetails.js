// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./AddReports.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const initialState = {
  date: "",
  venue: "",
  organizer: "",
  volunteers_needed: "",
};

export const AddCampDetails = () => {

  // const [date, setdate] = useState("");
  // const [venue, setvenue] = useState("");
  // const [organizer, setorganizer] = useState("");
  // const [volsneed, setvolsneed] = useState("");
  // const [upldfile, setupldfile] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = { date, venue, organizer, volsneed, upldfile };

  //   fetch('http://localhost:8000/add_camp_details', {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data)
  //   }).then(() => {
  //     console.log("New data added");
  //   })

  //   console.log(data);
  // };

  const [state, setState] = useState(initialState);

  const { date, venue, organizer, volunteers_needed } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {

    axios

      .get(`http://localhost:3001/get/camps/${id}`)

      .then((resp) => setState({ ...resp.data[0] }));

  }, [id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!date || !venue || !organizer || !volunteers_needed ) {

      toast.error("Please provide value into each input field");

    } else {

      if (!id) {

        axios.post("http://localhost:3001/insert/camps", {
          date,
          venue,
          organizer,
          volunteers_needed,
        }).then(() => {
          setState({ date: "", venue: "", organizer: "", volunteers_needed: "" });
        })

        .catch((err) => toast.error(err.response.data));

        toast.success("Camp Added Successfully");

      } else {

        axios.put(`http://localhost:3001/update/camps/${id}`, {
          date,
          venue,
          organizer,
          volunteers_needed,
        })
          .then(() => {

            setState({ date: "", venue: "", organizer: "", volunteers_needed: ""});

          })

          .catch((err) => toast.error(err.response.data));
        toast.success("Upcoming Camp Updated Successfully");
      }
      setTimeout(() => navigate.push("/CampDetails"), 500);
    }

  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

  };
  return (
    <>
<div style={{ marginTop: "20px" }}>
    <ToastContainer position="top-center"/>
    <h2 align="center" className="container-header">Update Camp Details</h2>

        {/* <form onSubmit={handleSubmit} align="center">
          <table align='center'>

            <tr>
              <td className="form-input"><label className='form-group'>Date</label></td>
              <td className="form-input">
                <input
                  className='form-control'
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="form-input"><label className='form-group'>Venue</label></td>
              <td className="form-input">
                <input
                  className='form-control'
                  type="text"
                  required
                  value={venue}
                  onChange={(e) => setvenue(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="form-input"><label className='form-group'>Organizer</label></td>
              <td className="form-input">
                <input
                  className='form-control'
                  type='text'
                  required
                  value={organizer}
                  onChange={(e) => setorganizer(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="form-input"><label className='form-group'>Volunteers Needed</label></td>
              <td className="form-input">
                <input
                  className='form-control'
                  type='text'
                  required
                  value={volsneed}
                  onChange={(e) => setvolsneed(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td className="form-input"><label className='form-group'>Upload File</label></td>
              <td className="form-input">
                <input
                  className='form-control'
                  type='file'
                  required
                  value={upldfile}
                  onChange={(e) => setupldfile(e.target.value)}
                />
              </td>
            </tr>
          </table> */}

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
          value={date || ""}
          onChange={handleInputChange}
        />

        <label htmlFor='venue'>Venue</label>
        <input
          type="text"
          id='venue'
          name='venue'
          placeholder='Enter the Venue...'
          value={venue || ""}
          onChange={handleInputChange}
        />

           <label htmlFor='organizer'>Organizer</label>
           <input
            type="text"
            id='organizer'
            name='organizer'
            placeholder='Enter the Organizer...'
            value={organizer || ""}
          onChange={handleInputChange}
        />

           <label htmlFor='volunteers_needed'>Volunteers Needed</label>
           <input
            type="number"
            id='volunteers_needed'
            name='volunteers_needed'
            placeholder='Enter Total Volunteers...'
            value={volunteers_needed || ""}
          onChange={handleInputChange}
        />

<input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/CampDetails">
          <input type="button" value="Go Back" />
        </Link>
        </form>
        {/* </form> */}

      </div>
    </>
  )
}
