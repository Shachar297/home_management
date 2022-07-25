
const express = require('express'),
    appLogic = require('../logic/app-logic'),
    router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await appLogic.getAllToBuyItems());
    } catch (e) {
        return next(e);
    }
})

router.get('/:id/', async (req, res, next) => {
    const itemId = req.params.id;
    try {
        res.json(await appLogic.getToBuyItemById(itemId));
    } catch (e) {
        return next(e);
    }
})


router.post('/', async (req, res, next) => {
    const item = req.body;
    console.log(req.body);
    try {
        const status = await appLogic.addToBuyItem(item);
        res.json(status);
    } catch (e) {
        return next(e);
    }
})

router.delete("/:id", async (req, res, next) => {
    const 
        itemId = req.params.id;

    try {
        res.json(await appLogic.removeToBuyItem(itemId));
    } catch (error) {
        return next(error);
    }
});


router.get('/categories/all/', async (req, res, next) => {
    try {
        res.json(await appLogic.getAllCategories());
    } catch (e) {
        return next(e);
    }
})


module.exports = router;

