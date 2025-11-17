const fs = require('fs').promises
const path = require('path')

const productsFile = path.join(__dirname, 'data/full-products.json')

async function list() {
  const data = await fs.readFile(productsFile)
  return JSON.parse(data)
}

async function get(id) {
  const products = await list()
  return products.find(product => product.id === id)
}

module.exports = {
  list,
  get
}
