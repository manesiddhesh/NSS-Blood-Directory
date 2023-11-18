import './App.css';
import { Header } from './MyComponents/Header';
import Home from './MyComponents/Home';
import { About } from './MyComponents/About';
import { CampDetails } from './MyComponents/CampDetails';
import { AddCampDetails } from './MyComponents/AddCampDetails';
import { VolunteerConfirmationTab } from './MyComponents/VolunteerConfirmationTab';
import { ConfirmedVolunteers } from './MyComponents/ConfirmedVolunteers';
import { ConfirmedAttendance } from './MyComponents/ConfirmedAttendance';
import { Attendancelist } from './MyComponents/Attendancelist';
import { VolunteersList } from './MyComponents/VolunteersList';
import { AttendanceTab } from './MyComponents/AttendanceTab';
import  FinalAttendance  from './MyComponents/FinalAttendance';
import  FinalConfirmedVolunteers from './MyComponents/FinalConfirmedVolunteers';
import { Reports } from './MyComponents/Reports';
import AddReports from './MyComponents/AddReports';
import MyAdminArea from './MyComponents/Home';
// import MyHome from './MyComponents/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ConfirmVolunteers from './MyComponents/ConfirmVolunteers';
import ConfirmAttendance from './MyComponents/ConfirmAttendance';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Header title={"NSS BLOOD DIRECTORY"} />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route exact path='/Home' element={<MyAdminArea />} />
          {/* <Route exact path='/About' element={<About />}/> */}
          <Route exact path='/CampDetails' element={<CampDetails />} />
          <Route exact path='/AddCampDetails' element={<AddCampDetails />} />
          <Route exact path='/VolunteerConfirmationTab' element={<VolunteerConfirmationTab />} />
          <Route exact path='/VolunteerConfirmationTab/:Id' element={<VolunteerConfirmationTab />} />
          <Route exact path='/About' element={<About />} />
          {/* <Route exact path='/About' element={<MyAdminArea />}/> */}
          <Route exact path='/ConfirmVolunteers' element={<ConfirmVolunteers />} />
          <Route exact path='/ConfirmVolunteers/:campId' element={<ConfirmedVolunteers />} />
          <Route exact path='/AttendanceTab' element={<AttendanceTab />} />
          <Route exact path='/AttendanceTab/:Id' element={<AttendanceTab />} />
          <Route exact path='/ConfirmAttendance' element={<ConfirmAttendance />} />
          <Route exact path='/ConfirmAttendance/:campId' element={<ConfirmedAttendance />} />
          <Route exact path='/Attendancelist/:campId' element={<Attendancelist />} />
          <Route exact path='/VolunteersList/:campId' element={<VolunteersList />} />
          <Route exact path='/FinalAttendance' element={<FinalAttendance />} />
          <Route exact path='/FinalConfirmedVolunteers' element={<FinalConfirmedVolunteers />} />
          <Route exact path='/Reports' element={<Reports />} />
          <Route exact path='/AddReports' element={<AddReports />} />
          <Route exact path='/update/:id' element={<AddReports />} />
          <Route exact path='/updatecamp/:id' element={<AddCampDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
