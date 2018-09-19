const db = require("../models")
module.exports.getMessages = async function(req, res, next) {
    try{
        let messages = await db.Message.find({room: req.params.room_id})
        return res.status(200).json({messages: messages})
    } catch(err) {
        return next(err);
    }
    
}

module.exports.postMessage = async function(req, res, next) {
    try{
        let message = await db.Message.create(req.body);
        return res.status(200).json(message)
    } catch(err) {
        return next(err);
    }
}

module.exports.updateMessage = function(req, res, next) {
    res.status(200).json({message: "updateMessage"})
}

module.exports.deleteMessage = async function(req, res, next) {
    try {
        let foundMessage = await db.Message.find({_id: req.params.message_id})
        await foundMessage.remove();
        return res.status(200).json({foundMessage: foundMessage, message: "message deleted"});
    } catch(err) {
        return next(err);
    }
}