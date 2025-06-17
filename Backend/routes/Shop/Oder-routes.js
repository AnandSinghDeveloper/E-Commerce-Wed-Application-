const router = require("express").Router();
 
const { createOrder, capturePayment, getAllOderByUser ,getoderDetails} = require("../../controllers/Shop/Order-Controller");


router.post('/createOrder', createOrder);
router.post('/capture', capturePayment);
router.get('/listOder/:userId', getAllOderByUser);
router.get('/details/:id', getoderDetails);


module.exports = router;