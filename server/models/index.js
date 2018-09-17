const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.DATABASE_URI, {keepAlive: true});

module.exports.User = require("./user");
module.exports.Room = require("./room");
module.exports.Message = require("./message");