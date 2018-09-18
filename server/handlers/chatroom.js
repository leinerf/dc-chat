const db = require("../models");

module.exports.createRoom = async function(req, res, next){
    try {
        //create a room with a certain user
        let room = await db.Room.create({name: req.body.name,creator: req.params.user_id});
        let {id, name, members, creator} = room;
        return res.status(200).json({
            id: id,
            name: name,
            creator: creator,
            members: members
        });
    } catch(err) {
        if (err.code === 11000) {
            err.message = "Sorry, that room is already created";
        }
        return next({
                status: 400,
                message: err.message
        });
    }
}

module.exports.getRooms = async function(req, res, next){
    try {
        //find all the rooms by user
        let rooms = await db.Room.find({creator: req.params.user_id});
        return res.status(200).json({rooms: rooms});
    } catch(err) {
        return next({
            status: 400,
            message: err.message
        });
    }
}

module.exports.getRoom = async function(req, res, next){
    try {
        //find all the rooms by user
        let room = await db.Room.find({_id: req.params.room_id});
        return res.status(200).json({room: room});
    } catch(err) {
        return next({
            status: 400,
            message: err.message
        });
    }
}
module.exports.updateRoom = function(req, res, next){
//more work with this like updating name, users list
}

module.exports.deleteRoom = async function(req, res, next){
    try {
        let foundRoom = await db.Room.findById(req.params.room_id);
        await foundRoom.remove();
        return res.status(200).json(foundRoom);
    } catch(err) {
        return next({
            status: 400,
            message: err.message
        });
    }
}