const express = require('express');
const router = express.Router();
const University = require('../models/university')


//Route:1 Add a New University
router.post('/add', async (req, res) => {
    try {
        const university = new University(req.body);
        await university.save();
        res.status(200).json({
            "success": true,
            university
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            "success": false,
            "Error": "Internal Server Error"
        });
    }
})

//Route:2 Get all University List
router.get('/all', async (req, res) => {
    try {
        const university = await University.find();
        res.status(200).json({
            "success": true,
            university
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            "success": false,
            "Error": "Internal Server Error"
        });
    }
});
//Route:3 Get University by ID
router.get('/:id', async (req, res) => {
    try {
        const university = await University.findById(req.params.id);
        res.status(200).json({
            "success": true,
            university
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            "success": false,
            "Error": "Internal Server Error"
        });
    }
});
module.exports = router;