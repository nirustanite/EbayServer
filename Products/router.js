const {Router} = require('express');
const Product = require('./model');

const router = new Router();

router.post('/product', (req,res,next) => {
     Product.create(req.body)
            .then(product => {
                return res.send(product)
            })
            .catch(next)
})

router.get('/products', (req,res,next) => {
    Product.findAll()
           .then(products => {
              return res.send(products)
           })
           .catch(next)
})

router.get('/prooduct/:id', (req,res) => {
    Product.findByPk(req.params.id)
           .then(product => {
               if(!product){
                  return res.status(404).send({
                       message: 'Item not found'
                   })
               }
               return res.send(product)
           })
           .catch(err => {
               console.error(error);
               res.status(500).send({
                   message:'Something wrong happened'
               })
           })
})

router.put('/product/:id', (req,res,next) => {
    Product.findByPk(req.params.id)
           .then(product => {
               if(!product){
                  return res.status(404).send({
                       message: 'Item not found'
                   })
               }
               return res.update(req.body)
                  .then(changedproduct => res.send(changedproduct))
           })
           .catch(next)
})

router.delete('/product/:id', (req,res,next) => {
    Product.destroy({
        where:{
            id: requestAnimationFrame.params.id
        }
    })
    .then(number => {
        if(number){
            return res.send({number})
        }
        return res.status(404).send({
            message: 'Product not found'
        })
    })
    .catch(next)
})


module.exports = router;