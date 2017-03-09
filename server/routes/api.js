const express = require('express');
const router = express.Router();
const Athlete = require('../model/athlete');

/* GET api listing. */
router.get('/', (req, res) => {
    // Add query methods here
    let query = Athlete.find({});

    if (req.query.name) {
        let nameList = JSON.parse(req.query.name);
        if (isNaN(parseInt(nameList[0]))) {
            query.where('name').regex( new RegExp( '^' + nameList[0] , 'i'))
        } else {
            query.where('userid').in(nameList);
        }
    }
    
    if (req.query.affiliateid) {
        let affiliateid = JSON.parse(req.query.affiliateid);
        query.where('affiliateid').in(affiliateid);
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
        console.log('Weight: ' , req.query.minweight);
        query.where('weightval').gt(parseFloat(req.query.minweight, 10) * 0.453592);
    }

    if (req.query.maxweight) {
        console.log('Max weightval: ' , req.query.maxweight);
        query.where('weightval').lt(parseFloat(req.query.maxweight, 10) * 0.453592);
    }

    if (req.query.minheight) {
        console.log('Height: ' , req.query.minheight);
        query.where('heightval').gt(parseFloat(req.query.minheight, 10) * 30.48);
    }

    if (req.query.maxheight) {
        console.log('Max Height: ' , req.query.maxheight);
        query.where('heightval').lt(parseFloat(req.query.maxheight, 10) * 30.48);
    }

    query.where('name').exists();

    // Sorting
    if (req.query.sortby) {
        if (req.query.sortby === 'world') {
            query.sort({'overallrank': 1});
        } else if (req.query.sortby === 'region') {
            query.sort({'regionalrank': 1});
        } else if (req.query.sortby === 'workout1') {
            query.sort({'scores.0.scorevalue': 1});
        } else if (req.query.sortby === 'workout2') {
            console.log('workout2');
            query.sort({'scores.1.scorevalue': -1});
        } else {
            query.sort({'overallrank': 1});
        }
    } else {
        query.sort({'overallrank': 1});        
    }
    
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