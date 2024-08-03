const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.index);
router.get("/new", messageController.newForm);
router.post("/new", messageController.create);
router.get("/messages/:id", messageController.show);

module.exports = router;
