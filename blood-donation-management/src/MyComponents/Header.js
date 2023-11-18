import React from 'react'
// import PropTypes from 'prop-types'
import nsslogo from './nsslogo.png';
import { Outlet, Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" id='navbg'>
        <div className="container-fluid">
          <nav as={Link} to="/"><img style={{ width: 60, height: 65 }} to="/" src={nsslogo} alt='logo' className="navbar-brand d-inline-block rounded-circle align-text-top" /></nav>
          <Link className="navbar-brand" to="#">NSS Blood Directory</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
              </li>

              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Camp Management
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/CampDetails">Upcoming Camp List/Details</Link></li>
                  {/* <li><Link class="dropdown-item" to="/AddCampDetails">Add Camp Details</Link></li> */}
                  {/* <li><Link class="dropdown-item" to="/VolunteerConfirmationTab">Volunteer Registration</Link></li> */}
                  <li><Link class="dropdown-item" to="/ConfirmVolunteers"> Approve Volunteers for Camps</Link></li>
                  <li><Link class="dropdown-item" to="/FinalConfirmedVolunteers"> Confirmed Volunteers List</Link></li>
                  {/* <li><Link class="dropdown-item" to="/AttendanceTab">Capturing Attendance</Link></li> */}
                  <li><Link class="dropdown-item" to="/ConfirmAttendance"> Approve Attendance of Volunteers</Link></li>
                  <li><Link class="dropdown-item" to="/FinalAttendance">Final Attendance List</Link></li>
                  <li><Link class="dropdown-item" to="/Reports">Reports List</Link></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blood Donor Management
                </Link>

                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="/Blood_Donors_Data">Blood Donors Data</Link></li>
                  <li><Link class="dropdown-item" to="#">VSIT Donors Data</Link></li>
                  <li><Link class="dropdown-item" to="#">NON-VSIT Donors Data</Link></li>
                  <li><Link class="dropdown-item" to="#">Upcoming Drive Details</Link></li>
                  <li><Link class="dropdown-item" to="/Non_VSIT_Registration_OnSite">NON-VSIT Registration On-site</Link></li>
                </ul>
              </li>

            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-link active">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>      Admin</li>
            </ul>
          </div>

        </div>
      </nav>
      <Outlet />

    </>
  )
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired
// }

// Header.defaultProps = {
//   title: 'Set Title'
// }