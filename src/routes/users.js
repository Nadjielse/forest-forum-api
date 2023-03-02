const express = require("express");

const user = require("../controllers").user;

const router = express.Router();

router.get('/', user.read);
router.get("/:username", user.readOne);
router.post('/', user.create);
router.put("/:username", user.update);
router.delete("/:username", user.destroy);

module.exports = router;