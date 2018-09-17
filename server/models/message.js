const mongoose = require("mongoose");
const Room = require("./user");

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 160
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }
  },
  {
    timestamps: true
  }
);

// messageSchema.pre("remove", async function(next) {
//   try {
//     // find a user
//     let room = await Room.findById(this.room);
//     // remove the id of the message from their messages list
//     room.messages.remove(this.id);
//     // save that user
//     await room.save();
//     // return next
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
