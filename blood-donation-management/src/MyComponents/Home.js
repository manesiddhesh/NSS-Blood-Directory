// import React from 'react'

// export default function Home() {

//   return (
//     <>
// <div className="container">

// <h3>NSS BLOOD  DIRECTORY</h3>

//   <div>
//           {/* <marquee>
//           <img src={require('./event1.jpeg')} alt={'EVENT'} height={450} width={300} />
//           </marquee>
//           <br/>
//           <strong>UPCOMING EVENT</strong> */}
//           <br />
//           {/* <img src={img} hspace="30" alt="" height={400} width={250} /> */}
//           {/* <strong>SIGN IN/LOG IN</strong> */}
//         </div>
//         </div>

//     </>
//       )
// }

import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Axios from 'axios'
import { Link } from "react-router-dom";
import xImg from '../img/a.jpg'

class MyAdminArea extends React.Component {
  state =
    {
      myID: "",
      empName: '',
      Arr1: [],
      file_detail: null
    }
  Base64 = null
  Submitdata = () => {
    const FD = new FormData()
    FD.append('upload_file', this.state.file_detail)
    Axios.post('http://localhost:3001/imageupload', FD)

    let str1 = "INSERT INTO upload_flyer VALUES('" + this.state.myID + "', '" + this.state.empName + "', ? )"
    Axios.post('http://localhost:3001/api/NonQuery_img', { mySQL: str1, myImg: xImg })
  }

  componentWillMount() {
    this.ReadData()
  }

  ReadData = () => {
    let str1 = "SELECT * FROM upload_flyer"
    Axios.get('http://localhost:3001/api/DataQuery', { params: { sql: str1 } }).then(
      (res) => {
        this.setState({ Arr1: res.data })
      }
    )
  }

  render() {
    return (<div>
      <h3>NSS BLOOD  DIRECTORY</h3>
      <br />
      <h5>Upcoming Events</h5>
      <img src={xImg} alt="Flyer" width="350px" /> <br/>
      <Link to={`/CampDetails`}>
          <button className="btn btn-edit">Register as Volunteer</button>
          </Link>
      <br />
      <b>{this.state.myID}</b>
      <br />
      <b>{this.state.empName}</b>
      <br />
      <Form>
        <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">
          {/* <Col sm="3 m-1">
            <Form.Control size="lg" type="text" placeholder="Enter Date of Camp..." onChange={(e) => this.setState({ myID: e.target.value })} />
          </Col>

          <Col sm="4 m-1">
            <Form.Control size="lg" type="text" placeholder="Enter Venue of Camp...." onChange={(e) => this.setState({ empName: e.target.value })} />
          </Col> */}

          <Col sm="3 m-1">
            <Form.Control size='lg' type="file" onChange={(e) => this.setState({ file_detail: e.target.files[0] })} />
          </Col>

          <Col sm="1 m-4" align='right'>
            <Button size='lg' variant="primary" onClick={this.Submitdata}>
              Submit
            </Button>
          </Col>

        </Form.Group>
      </Form>
      {/* <img src={xImg} alt="Flyer" width ="350px"/>
      <br/>
      <b>{this.state.myID}</b>
      <br/>
            <b>{this.state.empName}</b>
            <br/> */}
      <Form>
        <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">

          {this.state.Arr1.map((val) =>
            <Col sm="1 m-1">
              {/* {this.Base64 = new Buffer (val.myImg, 'Base64')} */}
              {/* <img width='150px' src={this.Base64} ></img> */}
              {/* <b>ID: {val.ID}</b>
              <div>Name: {val.empName}</div> */}
            </Col>
          )}

        </Form.Group>
      </Form>
    </div>
    );
  }
}

export default MyAdminArea;
