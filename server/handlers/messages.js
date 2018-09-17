const backend = {
    watchtower: {
        message:[]
    },
    batcave: {
        message:[]
    },
    titanstower: {
        message:[]
    },
    fortressofsolitude: {
        message:[]
    },
    atlantis: {
        message:[]
    }
}


exports.getMessages = function(req, res, next) {
    console.log(req.params.room_id);
    //find all messages within a certain room
    //return them
    res.status(200).json({message: "getMessages"})
}

exports.postMessage = function(req, res, next) {
    //get data from req.body
    //create a message with the data
    //save it to database
    //respond to the request
}

exports.updateMessage = function(req, res, next) {
    res.status(200).json({message: "updateMessage"})
}

exports.deleteMessage = function(req, res, next) {
    console.log(req.params.room_id);
    console.log(req.params.message_id);
    res.status(200).json({message: "deleteMessage"})
}