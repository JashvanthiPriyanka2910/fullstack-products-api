const express = require('express')
const api = require('./api')
const middleware = require('./middleware')

const port = process.env.PORT || 3000
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json())

app.get('/', api.handleRoot)
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)

app.use(middleware.notFound)
app.use(middleware.handleError)

app.listen(port, () => console.log(`Server listening on port ${port}`))
