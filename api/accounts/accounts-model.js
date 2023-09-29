const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first();
}

const create = account => { //eslint-disable-line
  // DO YOUR MAGIC
}

const updateById = (id, account) => { //eslint-disable-line
  // DO YOUR MAGIC
}

const deleteById = id => {//eslint-disable-line
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
