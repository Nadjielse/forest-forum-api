const express = require("express");

const auth = require("../middleware").auth;

const post = require("../controllers").post;

const router = express.Router();

router.get('/', post.read);
router.get("/:id", post.readOne);
router.post('/', auth, post.create);
router.put("/:id", auth, post.update);
router.delete("/:id", auth, post.destroy);

module.exports = router;