const express = require('express');
const router = express.Router();
const userRouter = require("./UserRouter")
const authRouter = require("./AuthRouter")
const listRouter = require("./WorkRouter")

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/list', listRouter)

module.exports =  router