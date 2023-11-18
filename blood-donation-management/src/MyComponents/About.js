import React from 'react'

export const About = () => {
  return (
    <div className="container">
    <h2 align='center'>About</h2>
  <br/>
  <div className="container">
    <p align="left">
    National Service Scheme (NSS) is the programme run by the ministry of Youth Affairs & Sports in Central Government and Department of Higher & Technical Education in State government. The primary objective of this scheme is the personality development of students through the community service. At present around 232 colleges of Mumbai University are implementing this scheme through 320 units with student strength of 36,000.
    </p>

    <p align="left">
    Vidyalankar Volunteering Committee of VSIT initiated the process of establishing NSS Unit in VSIT & successfully got this done in September 2009. The Motto of NSS is “Not Me But You”.
    </p>
  
    <p align="left">
    Under the NSS Programme any student studying in a village or in a university who opts for and is selected for NSS is expected to continue for the period of two years and is required to render social service for a minimum 120 hours per year and he is also required to participate in 7 day special camping programme.
    </p>
  </div>

    {/* <h3>Short Info about our WEBAPP</h3> 
    <br/>
    <h3>Short Description about VSIT NSS</h3>
    <br/>
    <h3>Glimpse of Blood donation activities</h3>
    <br/>
    <h3>Some testimonials patients & blood banks</h3>
    <br/>
    <h3>Contact Details and Social Media links</h3> */}
  </div>
  )
}

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
//       <br/>
//       {this.state.myID}
//       <br/>
//             {this.state.empName}
//             <br/>
//       <img src={xImg} alt="Flyer" width ="350px"/>
//       <Form>
//         <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">

//           {this.state.Arr1.map((val) =>
//             <Col sm="1 m-1">
//               {/* {this.Base64 = new Buffer (val.myImg, 'Base64')} */}
//               <img width='150px' src={this.Base64} ></img>
//               {/* <b>ID: {val.ID}</b>
//               <div>Name: {val.empName}</div> */}
//             </Col>
//           )}

//         </Form.Group>
//       </Form>
//     </div>
//     );
//   }
// }

// export default MyAdminArea;