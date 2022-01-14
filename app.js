const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(
//   "<Paste Link Here>"
// );

const studentSchema = {
  name: String,
  roll: String,
};

const Student = mongoose.model("Student", studentSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log(req.body);
  // const name = req.body.name;
  // const roll = req.body.roll;

  const student = new Student({
    name: req.body.name,
    roll: req.body.roll,
  });

  student.save(function () {
    res.sendFile(__dirname + "/success.html");
  });

  // console.log(name,roll);
});

app.get("/check", function (req, res) {
  // ModelName.find({condition}, function(error, result){
  // });

  Student.find({}, function (err, result) {
    if (!err) {
      console.log(result);
    } else {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(3000, function () {
  console.log("listening at port 3000");
});
