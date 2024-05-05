const express = require('express')
const router = express.Router()
const user_model = require('../models/userCollection')


router.get('/', (req, res) => {
    res.send('User Router')
})


router.post('/signup', async (req, res) => {
    try {
        const findUser = await user_model.find({email: req.body.email})
        if (findUser.length > 0) {
            res.status(409)
            res.send('User Already Exists')
        }
        else {
            const new_user = new user_model({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            });
            new_user.save()
            res.send(`${req.body.firstname} ${req.body.lastname}`)
        }
    }
    catch (err) {
        res.status = 404;
        res.send('Server Error')
    }
})


router.post('/login', async (req, res) => {
    try {
        const find_user = await user_model.find({email: req.body.email, password: req.body.password})
        if (find_user.length == 0) {
            res.status(409)
            res.send('User Not Found')
        }
        else {
            res.send(find_user[0])
        }
    }
    catch (err) {
        res.status(404)
        res.send('Server Error')
    }
})


module.exports = router