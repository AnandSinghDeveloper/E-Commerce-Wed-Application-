const router = require("express").Router();
 
const { createOrder, capturePayment } = require("../../controllers/Shop/Order-Controller");


router.post('/createOrder', createOrder);
// router.post('/capturePayment', capturePayment);


module.exports = router;