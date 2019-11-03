const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling by get method to the product'
    });
});
router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'handling by post method to the product'
    });
});

module.exports = router;