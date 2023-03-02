const express = require("express");

const post = require("../controllers").post;

const router = express.Router();

router.get('/', post.read);
router.get("/:id", post.readOne);
router.post('/', post.create);
router.put("/:id", post.update);
router.delete("/:id", post.destroy);

module.exports = router;