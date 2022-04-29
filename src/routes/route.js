


const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const authController = require('../middleWare/auth')

router.post('/createAuthors', authorController.addAuthor);
router.post('/authorLogin', authorController.loginAuthor);
router.post('/createBlogs',authController.authencation, blogController.createBlog);
router.get('/getBlogs',authController.authencation, blogController.getBlogs);
router.put('/updateBlogs/:blogId',authController.authorise, blogController.putPublished);
router.delete('/deleteBlogs/:blogId',authController.authorise, blogController.deleteBlogById);
router.delete('/deleteBlogs?',authContoller.authorise, blogController.deleteBlogsByParams);

module.exports =  router;

