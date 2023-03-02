const express = require("express");

const user = require("../controllers").user;

const router = express.Router();

router.get('/', user.read);
router.get("/:id", user.readOne);
router.post('/', user.create);
router.put("/:id", user.update);
router.delete("/:id", user.destroy);

module.exports = router;