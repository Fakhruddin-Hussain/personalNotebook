const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj={
        a: "This is",
        number: 34
    }
    res.json(obj)
}); 

module.exports = router;
