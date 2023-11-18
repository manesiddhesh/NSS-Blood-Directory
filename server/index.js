const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const multer = require('multer')
var path = require('path');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'blood_directory'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

//DisplayingReports_______________________________________________________________________
app.get('/get/reports',(req, res)=>{
    const sqlGet = "SELECT * FROM reports";
    db.query(sqlGet, (erorr,result) =>{
        res.send(result);
    });
});

// ...REGISTERING VOLUNTEERS::::______________________________________________________
app.post('/VolunteerConfirmationTab/:Id',(req,res)=>{
    let campId = req.params.Id;
    let volunteerObj = JSON.parse(JSON.stringify({...req.body,campId}));
    let RegisteredUser = "Select * from `volunteersregistered` where rollNo=? and campRegisteredId=?"
    db.query(RegisteredUser,[volunteerObj.rollno,volunteerObj.campId],(err,result)=>{
        if(result.length >= 1){
            // console.log("here");
            res.sendStatus(409);
        }else{
            // console.log("0");
            let _Query = "INSERT INTO volunteersregistered (name, academicYear, yearInNSS, department, campRegisteredId, rollNo, status) VALUES (?,?,?,?,?,?,?)";
             db.query(_Query,[volunteerObj.name,volunteerObj.academicYear,volunteerObj.yearinnss,volunteerObj.department,volunteerObj.campId,volunteerObj.rollno,false],(err,result)=>{
                //  console.log(err ? err.message : "volunteer registered");
                 if(result){
                    // console.log(result);
                     res.sendStatus(200);
                 }else{
                    console.log("ehre");
                    res.send(err)
                 }
             });
        }
    })
});

app.get('/registeredVolunteers/:campId',(req,res)=>{
     let campId = req.params.campId;
     let _Query = `select * from volunteersregistered where campRegisteredId=?`;
     db.query(_Query,campId,(err,result)=>{
        if(result){
            // console.log(result);
            res.send(result);
        }else{
            // console.log(err);
            res.send(err);
        }
     })
})

app.post('/setCmpDone/:id',(req,res)=>{
    let campId = req.params.id;
    let camp = {...req.body[0]};
    console.log(camp);
    let _Query = `Update activities SET ended=1 where id=?`;
    let insertReportQuery = `insert into reports (id,date,venue,organizer,ENDED,totvols,totbd,totbnf) VALUES (?,?,?,?,?,?,?,?)`;


    db.query(_Query,campId,(err,result)=>{
        if(result){
            console.log(campId);
            // INSERT CAMP OVER INTO REPORT WITH DONE STATUS
            db.query(insertReportQuery,[campId,camp.date,camp.venue,camp.organizer,1,camp.volunteers_needed,0,0],(err,result)=>{
                if(result){
                   console.log(result);
                }else{
                   throw err;
                }
           })
            res.send(result);
        }else{
            res.send(err.message);
        }
    })
})

app.get('/getCamp/:campId',(req,res)=>{
    let campId = req.params.campId;
    let _Query = `select * from activities where id =?`;
    db.query(_Query,campId,(err,result)=>{
       if(result){
           // console.log(result);
           res.send(result);
       }else{
           // console.log(err);
           res.send(err);
       }
    })
})
// /approvedVolunteers/${campId}
app.get('/getCamp/:campId',(req,res)=>{
    let campId = req.params.campId;
    let _Query = `select * from volunteersregistered where campRegisteredId =? and status=1`;
    db.query(_Query,campId,(err,result)=>{
       if(result){
           // console.log(result);
           res.send(result);
       }else{
           // console.log(err);
           res.send(err);
       }
    })
})
// http://localhost:3001/registeredVolunteers/${campId}/approved
app.get('/registeredVolunteers/:campId/approved',(req,res)=>{
    let campId = req.params.campId;
    let _Query = `select * from volunteersregistered where campRegisteredId =? and status=1`;
    db.query(_Query,campId,(err,result)=>{
       if(result){
           // console.log(result);
           res.send(result);
       }else{
           // console.log(err);
           res.send(err);
       }
    })
})

app.put('/approveRegisteredVolunteers/:id/:status',(req,res)=>{
    let {id,status} =req.params;
    if(status === "approved"){
        status = true;
    }else{
        status = false;
    }
    const _Query = "UPDATE volunteersregistered SET status =? WHERE id = ?";
    db.query(_Query, [status,id], (error,result) =>{
        if(error){
            console.log(error);
            res.send(error)
        }else{
            res.send(result);
        }
    });
})
// ...REGISTERING VOLUNTEERS END ::::______________________________________________________

// ...MARKING ATTENDANCE ::::______________________________________________________________
app.post('/AttendanceTab/:Id',(req,res)=>{
    let campId = req.params.Id;
    let volunteerObj = JSON.parse(JSON.stringify({...req.body,campId}));
    let RegisteredUser = "Select * from `attendance_final` where rollNo=? and campRegisteredId=?"
    db.query(RegisteredUser,[volunteerObj.rollno,volunteerObj.campId],(err,result)=>{
        if(result.length >= 1){
            // console.log("here");
            res.sendStatus(409);
        }else{
            // console.log("0");
            let _Query = "INSERT INTO attendance_final (name, academicYear, yearInNSS, department, campRegisteredId, rollNo, status) VALUES (?,?,?,?,?,?,?)";
             db.query(_Query,[volunteerObj.name,volunteerObj.academicYear,volunteerObj.yearinnss,volunteerObj.department,volunteerObj.campId,volunteerObj.rollno,false],(err,result)=>{
                //  console.log(err ? err.message : "volunteer registered");
                 if(result){
                    // console.log(result);
                     res.sendStatus(200);
                 }else{
                    console.log("ehre");
                    res.send(err)
                 }
             });
        }
    })
})

app.get('/attendance_final/:campId',(req,res)=>{
    let campId = req.params.campId;
    let _Query = `select * from attendance_final where campRegisteredId=?`;
    db.query(_Query,campId,(err,result)=>{
       if(result){
           // console.log(result);
           res.send(result);
       }else{
           // console.log(err);
           res.send(err);
       }
    })
})

app.get('/getCamp/:campId',(req,res)=>{
    let campId = req.params.campId;
    let _Query = `select * from attendance_final where campRegisteredId =? and status=1`;
    db.query(_Query,campId,(err,result)=>{
       if(result){
           // console.log(result);
           res.send(result);
       }else{
           // console.log(err);
           res.send(err);
       }
    })
})

app.get('/final_attendance/:campId/approved',(req,res)=>{
    let campId = req.params.campId;
    let _Query = `select * from attendance_final where campRegisteredId =? and status=1`;
    db.query(_Query,campId,(err,result)=>{
       if(result){
           // console.log(result);
           res.send(result);
       }else{
           // console.log(err);
           res.send(err);
       }
    })
})

app.put('/approveattendance_final/:id/:status',(req,res)=>{
    let {id,status} =req.params;
    if(status === "approved"){
        status = true;
    }else{
        status = false;
    }
    const _Query = "UPDATE attendance_final SET status =? WHERE id = ?";
    db.query(_Query, [status,id], (error,result) =>{
        if(error){
            console.log(error);
            res.send(error)
        }else{
            res.send(result);
        }
    });
})

// ...MARKING ATTENDANCE END ::::___________________________________________________________

//AddingReports_____________________________________________________________________________
app.post('/insert/reports', (req,res)=>{
    const date = req.body.date;
    const venue = req.body.venue;
    const organizer = req.body.organizer;
    const totvols = req.body.totvols;
    const totbd = req.body.totbd;
    const totbnf = req.body.totbnf;

    const sqlInsert =
    "INSERT INTO reports (date, venue, organizer, totvols, totbd, totbnf) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [date, venue, organizer, totvols, totbd, totbd*3],
      (err,result) => {
        console.log(err);
        console.log(result);
    });
});
//AddingReports_end_______________________________________________________________________

//DeleteReports___________________________________________________________________________
app.delete('/delete/reports/:id', (req,res)=>{
    const {id} = req.params;

    const sqlDelete =
    "DELETE FROM reports WHERE id=?";
    db.query(sqlDelete, id,
      (err,result) => {
        console.log(err);
        console.log(result);
    });
});
//DeleteReports_end________________________________________________________________________

//UpdateReports____________________________________________________________________________
app.get('/get/reports/:id',(req, res)=>{
    const {id} =req.params;
    const sqlGet = "SELECT * FROM activities WHERE id= ?";
    db.query(sqlGet, id, (erorr,result) =>{
        if(erorr){
            console.log(erorr);
        }
        res.send(result);
    });
});

app.put('/update/reports/:id',(req, res)=>{
    const {id} =req.params;
    const{date, venue, organizer, volunteers_needed, totbd} =req.body;
    const sqlUpdate = "UPDATE reports SET date = ?, venue = ?, organizer = ?, totvols = ?, totbd = ?, totbnf = ? WHERE id = ?";
    db.query(sqlUpdate, [date, venue, organizer, volunteers_needed, totbd, totbd * 3, id], (erorr,result) =>{
        if(erorr){
            console.log(erorr);
        }else{
            console.log(result);
        }
        res.send(result);
    });
    console.log(id);
});
//UpdateReports_end_________________________________________________________________

//image_upload_api_starts___________________________________________________________
app.post("/api/NonQuery_img", (req, res) => {
    let mySQL = req.body.mySQL
    let myImg = req.body.myImg
    
    db.query(mySQL,[myImg], (err, result) => {
     console.log(err)
     if (err == null)
         res.send('Done')
     else 
         res.send('Error')
   })
 });
 
app.post("/api/NonQuery", (req, res) => {
   let mySQL = req.body.mySQL
   
   db.query(mySQL, (err, result) => {
    console.log(err)
    if (err == null)
        res.send('Done')
    else 
        res.send('Error')
  })
});
 
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../blood-donation-management/src', 'img'),
    filename: function (req, file, cb) {   
        // null as first argument means no error
        //cb(null, Date.now() + '-' + file.originalname )
        cb(null, 'a.jpg' )
 
    }
})
 
app.post('/imageupload', async (req, res) => {  
    try {
        // 'avatar' is the name of our file input field in the HTML form
 
        let upload = multer({ storage: storage}).single('upload_file');
       
        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields
          
            if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }
            else if (err) {
                return res.send(err);
            }
 
            const classifiedsadd = {
                image: req.file.filename
            };           
        }); 
 
    }catch (err) {console.log(err)}
})

 
app.get ("/api/DataQuery", (req,res) => {
    const mySQL = req.query.sql
    db.query(mySQL, (err, result) => {
        console.log(result)
        res.send(result)
    })
}
);
//image_upload_api_end_____________________________________________________________________

//upcoming_camps_api______________________________________________________________________
app.get('/get/upcmgcamps',(req, res)=>{
    const sqlGet = "SELECT * FROM activities WHERE name='Blood Donation Camp' and ended=0";
    console.log("here...")
    db.query(sqlGet, (erorr,result) =>{
        res.send(result);
    });
});
//Upcoming_camps_api_end___________________________________________________________________

//finishedupcoming_camps_api______________________________________________________________________
app.get('/get/donecamps',(req, res)=>{
    const sqlGet = "SELECT * FROM activities WHERE name='Blood Donation Camp' and ended=1";
    console.log("here...")
    db.query(sqlGet, (erorr,result) =>{
        res.send(result);
    });
});
//finishedUpcoming_camps_api_end___________________________________________________________________

//delete_upcoming_camp_____________________________________________________________________
app.delete('/delete/camp/:id', (req,res)=>{
    const {id} = req.params;

    const sqlDelete =
    "DELETE FROM activities WHERE id=?";
    db.query(sqlDelete, id,
      (err,result) => {
        console.log(err);
        console.log(result);
    });
});
//delete_upcoming_camp_____________________________________________________________________

//UpdateCamps__________________________________________________________________
app.get('/get/camps/:id',(req, res)=>{
    const {id} =req.params;
    const sqlGet = "SELECT * FROM activities WHERE id=?";
    db.query(sqlGet, id, (erorr,result) =>{
        if(erorr){
            console.log(erorr);
        }
        res.send(result);
    });
});

app.put('/update/camps/:id',(req, res)=>{
    const {id} =req.params;
    const{date, venue, organizer, volunteers_needed} =req.body;
    const sqlUpdate = "UPDATE activities SET date = ?, venue = ?, organizer = ?, volunteers_needed = ? WHERE id = ?";
    db.query(sqlUpdate, [date, venue, organizer, volunteers_needed, id], (erorr,result) =>{
        if(erorr){
            console.log(erorr);
        }
        res.send(result);
    });
});
//UpdateCamps_end_________________________________________________________________


//EDIT_VIEW_DELETE_API
// app.post("")


app.listen(3001, ()=>{
    
    console.log("running on port 3001");
});




// const express = require("express");
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// const app = express();
// const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root123',
//     database: 'varad'
// });

// app.get('/', (req, res)=>{
    
//     const sqlInsert1 = "INSERT INTO movies (name, review) VALUES('interstellar','good');"
//     db.query(sqlInsert1, (err, result)=>{
//     res.send("Inserted");
//     console.log(err);
//     console.log(result);
//     })

// });

// app.listen(3001, ()=>{
    
//     console.log("running on port 3001");
// });
// // insert into upcmg_cmp (Date_of_Camp, Venue, Organizer, Volunteers_Needed) values ('20/02/2022', 'Sion' , 'JJR', '20');
//     host: 'localhost',
//     user: 'root',
//     password: 'root123',
//     database: 'blood_directory'
// });