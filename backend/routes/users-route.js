const express = require('express'),
usersLogic = require('../logic/users-logic'),
router = express.Router()

router.post("/", async(req, res, next) => {
    const user = req.body;
    try {
        res.json(await usersLogic.login(user))
    } catch (error) {
        return next(error);
    }
});

module.exports = router;