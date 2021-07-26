
const express = require('express');
const router = express.Router();
router.use(express.json())

const passport = require('passport');
const db = require('../models');

let requireJwt = passport.authenticate('jwt', {session: false})
//to be changed to add favorites

router.post('/favorites', async (req, res) => {
    let apiId = req.body.apiId;
    let types = req.body.type;
    let title = req.body.title;

    // console.log("favorite route running")

    try{
        let favorites = await db.favorites.create({apiId: apiId, types: types, title: title})
        
        // console.log(favorites)
        res.json(favorites.dataValues);
    }
    catch(error){
        return res.send(error)
    }
    // console.log(req.body)
    // res.send('success')
})


module.exports = router