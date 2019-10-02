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


router.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(404).send({
            message: 'Please specify a valid email and password'
        })
    }
    else{
        User.findOne({
            where:{
                email: req.body.email
            }
        })
        .then(user => {
            if(!user){
                res.status(404).send({
                    message: 'User with that email does not exist'
                })
            }
            else if(bcrypt.compareSync(password,user.password)){
                res.send({
                    jwt:toJwt({userId: user.id})
                })
            }
            else{
                res.status(400).send({
                    message: 'Password was incorrect'
                })
            }
        })
        .catch(err => {
            console.error(err)
            res.status(500).send({
                message: 'Something went wrong'
            })
        })
    }
})


router.get('/secret-endpoint', auth, (req,res) => {
    res.send({
        message: `Thanks for visiting the secret endpoint ${req.user.email}`
    })
})

module.exports = router;