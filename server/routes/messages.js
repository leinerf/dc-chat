const express = require('express');
const router = express.Router({mergeParams: true});
const {getMessages, postMessage, updateMessage,deleteMessage} = require("../handlers/messages");

router.route("/")
    .get(getMessages)
    .post(postMessage);

router.route("/:message_id")
    .put(updateMessage)
    .delete(deleteMessage);
    
module.exports = router;