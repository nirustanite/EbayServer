const {Router} = require('express');
const bcrypt = require('bcrypt');
const User = require('./model');
const {toJwt} = require('../auth/jwt');
const auth = require('../auth/middleware')

const router = new Router();

router.post('/signup', (req,res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10)
    };

    User.create(user)
        .then(user => {
            if(!user){
                return res.status(404).end();
            }
            return res.send(user)
        })
})

module.exports = router;