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

module.exports.getRoom = function(req, res, next){
    
}
module.exports.updateRoom = function(req, res, next){

}

module.exports.deleteRoom = function(req, res, next){

}