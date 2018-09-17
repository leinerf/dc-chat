const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        roomIdentifier: {
            type: String,
            unique: true
        },
        members: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
        }]
    }
)

roomSchema.pre("save", async function(next){
    try {
        if(!this.roomIdentifier){
            this.roomIdentifier = `${this.creator}_${this.name}`;
        }
        return next();
    } catch(err){
        return next(err);
    }
})

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;