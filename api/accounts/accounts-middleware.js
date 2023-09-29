const Accounts = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const error = { status: 400 };
  const { name, budget } = req.body;

  if(!name || !budget){
    error.message = 'name and budget are required';
  }
  else if(typeof name !== 'string'){
    error.message = 'name of account must be a string';
  }
  else if(name.trim().length < 3 || name.trim().length > 100){
    error.message = 'name of account must be between 3 and 100';
  }
  else if(typeof budget !== 'number' || isNaN(budget)){
    error.message = 'budget of account must be a number';
  }
  else if(budget < 0 || budget > 1000000){
    error.message = 'budget of account is too large or too small';
  }

  if(error.message){
    next(error);
  }else{
    next();
  }
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
