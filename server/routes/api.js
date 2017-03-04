const express = require('express');
const router = express.Router();
const Athlete = require('../model/athlete');

/* GET api listing. */
router.get('/', (req, res) => {
    // Add query methods here
    let query = Athlete.find({});

    let name = req.query.name;
    if (name) {
        query.where('name').regex( new RegExp( name , 'i'))
    }
    
    let affiliateid = req.query.affiliateid;
    if (affiliateid) {
        query.where('affiliateid').equals(affiliateid);
    }

    let division = parseInt(req.query.division, 10);
    if (division && division !== 0) {
        query.where('division').equals(division);
    }

    let occupation = req.query.occupation;
    if (occupation) {
        query.where('occupation').equals(occupation);
    }

    let region = parseInt(req.query.region, 10);
    if (region && region !== 0) {
        query.where('regionid').equals(region);
    }

    if (req.query.maxage) {
        query.where('age').lt(parseInt(req.query.maxage, 10) + 1);
    }

    if (req.query.minage) {
        query.where('age').gt(parseInt(req.query.minage, 10) - 1);
    }

    if (req.query.minweight) {
        query.where('weightval').gt(parseInt(req.query.minweight, 10) * 0.453592);
    }

    if (req.query.maxweight) {
        query.where('weightval').lt(parseInt(req.query.maxweight, 10) * 0.453592);
    }

    if (req.query.minheight) {
        query.where('heightval').gt(parseInt(req.query.minheight, 10) * 30.48);
    }

    if (req.query.maxheight) {
        query.where('heightval').lt(parseInt(req.query.maxheight, 10) * 30.48);
    }

    query.where('name').exists();
    query.sort({'overallrank': 1});
    
    let limit = parseInt(req.query.limit, 10);
    if (limit) {
        query.limit(parseInt(limit, 10));
    }

    let offset = parseInt(req.query.offset, 10);
    if (offset) {
        query.skip(offset);
    }

    query.exec((err, users) => {
        if (err) throw err;
        res.status(200).json({
            data: users
        });
    });
});

module.exports = router;