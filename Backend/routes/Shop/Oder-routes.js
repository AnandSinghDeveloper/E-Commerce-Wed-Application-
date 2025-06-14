const router = require("express").Router();
 
const { createOder, capturePayment } = require("../../controllers/Shop/Order-Controller");


router.post('/createOder', createOder);
// router.post('/capturePayment', capturePayment);


module.exports = router;