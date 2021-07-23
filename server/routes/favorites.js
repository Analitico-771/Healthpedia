
const express = require('express');
const router = express.Router();
router.use(express.json())

const passport = require('passport');
const db = require('../models');

let requireJwt = passport.authenticate('jwt', {session: false})
//to be changed to add favorites

router.post('/favorites', async(req, res) => {
    let apiId = req.body.apiId;
    let types = req.body.types;
    let title = req.body.title;

    console.log("favorite route running")

    try{
        let favorites = await db.favorites.create({apiId: apiId, types: types, title: title})
        // let jwtToken = token(favorites);
        // return res.json({token: jwtToken})

        res.send("success");
        return res.json(favorites)
    }
    catch(error){
        return res.send(error)
    }
    // console.log(req.body)
    // res.send('success')
})
// router.get('/favorites/:id', async (req, res) => {
//     let id = req.params.id;
//     let categories = await db.favorites.findAll(id);
//     try{
//         let favorite = await db.favorites.findAll({where:  {categories: categories}});
//     }
//     catch(error){
//         return res.send(error)
//     }
// })
module.exports = router