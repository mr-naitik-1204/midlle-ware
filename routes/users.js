var express = require('express');
var router = express.Router();

const UC =require('../controller/ExamC')
const UP=require('../controller/Cete')
var AM=require('../middlewhere/AuthChack')
router.post('/Singup',UC.Singup)
router.post('/Login',UC.Login)

router.post('/Create',AM.tokensecure,UP.Create)
router.get('/show',AM.tokensecure,UP.show)
router.delete('/Delete/:id',AM.tokensecure,UP.Delete)
router.patch('/updete/:id',AM.tokensecure,UP.updete)

module.exports = router;
