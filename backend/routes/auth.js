const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth");

router.post("/create_user", authControllers.createUser);

router.post("/login" , authControllers.login)

module.exports = router;
