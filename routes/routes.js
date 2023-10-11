const express = require("express");

const router = express.Router();
const mangaModel = require('../model/manga.js');
router.post('/post', async (req, res) => {
    console.log("wtffffffffffffff");
    console.log(req.body);
    const newMangaData = new mangaModel({
        name: req.body.name,
        author: req.body.author
    })
    try {
        const newMangaDataToSave = await newMangaData.save();
        res.status(200).json(newMangaDataToSave)
    } catch (error) {
        res.status(400).json({message:  error.message })
        // res.status(400).json({message: error.message})
    }
})

router.get('/getAll', (req, res) => {
    res.send('Get All API');
})

router.get('/getOne/:id', (req, res) => {
    res.send('Get By ID API')
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Deleted by ID API')
})



module.exports = router;