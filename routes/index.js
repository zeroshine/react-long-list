/*eslint-disable*/
var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => res.redirect(200,'/Dashboard'));
router.get('*',(req, res, next) => res.sendFile( __base + 'dist/index.html' ));
// router.get('/Report',(req, res, next) => res.sendFile( __base + 'dist/index.html' ));
// router.get('/Event',(req, res, next) => res.sendFile( __base + 'dist/index.html' ));
// router.get('/Setting',(req, res, next) => res.sendFile( __base + 'dist/index.html' ));

module.exports = router;
