const express = require('express');
const { createUser, loginUser, getUserBooks,getUserInfo } = require('../controllers/users.controller');
const router = express.Router();

router.post('/register',createUser);
router.post("/login",loginUser)
router.get("/login",loginUser)
router.get('/profile/books',getUserBooks)
router.get('/profile',getUserInfo)
// router.post('/profile',getUserBooks)
module.exports = router;