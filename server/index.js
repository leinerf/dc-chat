require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const roomRoutes = require("./routes/chatroom");
const messageRoutes = require("./routes/messages");
//middleware
const {loginRequired, ensureCorrectUser} = require("./middleware/auth");

//allow cross origin 
app.use(cors());
//enable req.body to be parsed in json
app.use(bodyParser.json());

//auth route (signin,signup)
app.use("/api/user/", authRoutes);
//room route
app.use("/api/user/:user_id/room/",
    loginRequired,
    ensureCorrectUser,
    roomRoutes);

// messages route
app.use("/api/user/:user_id/room/:room_id/messages/",
    loginRequired,
    ensureCorrectUser,
    messageRoutes);



app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
app.use(errorHandler);

PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is starting on http://localhost:${PORT}`);
});