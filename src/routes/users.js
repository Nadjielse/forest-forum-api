const express = require("express");

const auth = require("../middleware").auth;

const user = require("../controllers").user;

const router = express.Router();

router.get('/', user.read);
router.get("/:username", user.readOne);
router.post('/', user.create);
router.put('/', auth, user.update);
router.delete('/', auth, user.destroy);

module.exports = router;