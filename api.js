const path = require('path')
const Products = require('./products')
const autoCatch = require('./lib/auto-catch')

function handleRoot(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
}

async function listProducts(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const products = await Products.list()
  res.json(products)
}

async function getProduct(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.params
  const product = await Products.get(id)
  if (!product) {
    return next()
  }
  res.json(product)
}

module.exports = autoCatch({
  handleRoot,
  listProducts,
  getProduct
})
