var express = require('express');
var router = express.Router();
const multer = require('multer')


const UC =require('../controller/ExamC')
const UP=require('../controller/Cete')
var AM=require('../middlewhere/AuthChack')
router.post('/Singup',UC.Singup)
router.post('/Login',UC.Login)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



router.post('/Create',upload.single('image'),AM.tokensecure,UP.Create)
router.get('/show',AM.tokensecure,UP.show)
router.delete('/Delete/:id',AM.tokensecure,UP.Delete)
router.patch('/updete/:id',AM.tokensecure,UP.updete)

module.exports = router;
