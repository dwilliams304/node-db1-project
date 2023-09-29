const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  next();
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC

  next();
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await Accounts.getById(req.params.id);
    if(!account){
      next({status: 400, message: 'Account with specified ID does not exist'})
    }
    else{
      req.account = account;
      next();
    }
  }
  catch(err){
    next(err);
  }
}
