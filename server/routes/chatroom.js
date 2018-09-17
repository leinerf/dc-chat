const express = require('express');
const router = express.Router({mergeParams: true});

const {createRoom, getRoom, updateRoom, deleteRoom} = require("../handlers/chatroom");

router.route("/").post(createRoom);

router.route("/:room_id")
    .get(getRoom)
    .put(updateRoom)
    .delete(deleteRoom);

module.exports = router