const router = require('express').Router()
const Accounts = require('./accounts-model');
const middleware = require('./accounts-middleware');

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
      const accounts = await Accounts.getAll();
      res.json(accounts);
  }
  catch(err){
    next(err)
  }
})

router.get('/:id', middleware.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account);
})

router.post('/', middleware.checkAccountPayload, 
middleware.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  }
  catch(err){
    next(err)
  }
})

router.put('/:id', middleware.checkAccountId, middleware.checkAccountPayload, 
middleware.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  }
  catch(err){
    next(err)
  }
});

router.delete('/:id', middleware.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    
  }
  catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
 
})

module.exports = router;
