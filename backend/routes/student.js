const express = require('express');
const router = express.Router();
const Student = require('../models/student')
const University = require('../models/university')


//Route:1 Add a New Student
router.post('/add', async (req, res) => {
    try {
        console.log(req.body);
        const student = new Student(req.body);
        await student.save();

        res.status(200).json({
            "success": true,
            student
        })

    }
    catch (error) {
        console.log(error);

        return res.status(400).json({
            "success": false,
            "Error": "Internal Server Error"
        });

    }
});
//Route:2 Get all Student
router.get('/all', async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).send({
            "success": true,
            student
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            "success": false,
            "Error": "Internal Server Error"
        });
    }
});
//Route:3 Get Student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        console.log(student)
        if (!student)
            return res.status(400).json({ "success": false, "Error": "ID not Matched" });

        res.status(200).send({
            "success": true,
            student
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