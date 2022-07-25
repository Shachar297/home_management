const express = require('express'),
apartmentsLogic = require('../logic/apartments-logic'),
router = express.Router()

router.post("/", async(req, res, next) => {
    const apartment = req.body;
    try {
        res.json(await apartmentsLogic.registerNewApartment(apartment))
    } catch (error) {
        return next(error);
    }
});

module.exports = router;