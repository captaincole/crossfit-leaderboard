const express = require('express');
const router = express.Router();
const Athlete = require('../model/athlete');

/* GET api listing. */
router.get('/', (req, res) => {
    // Add query methods here
    let params = req.query.limit;
    let query = Athlete.find({});
    
    if (params) {
        query.limit(parseInt(params, 10));
    }

    query.exec((err, users) => {
        if (err) throw err;

        console.log(users);
        res.status(200).json({
            data: users
        });
    });
});

module.exports = router;