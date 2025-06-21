const router = require("express").Router();
 
const {  getAllOder ,getoderDetails} = require("../../controllers/Admin/ADoder-controller");


router.get('/Oders', getAllOder);
router.get('/details/:id', getoderDetails);


module.exports = router;