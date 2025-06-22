const router = require("express").Router();
 
const {  getAllOder ,getoderDetails , updateOderStatus} = require("../../controllers/Admin/ADoder-controller");


router.get('/Oders', getAllOder);
router.get('/details/:id', getoderDetails);
router.put('/update/:id', updateOderStatus);


module.exports = router;