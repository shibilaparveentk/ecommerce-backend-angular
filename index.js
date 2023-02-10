
//1.import express
const express = require('express')

//5.import cors
const cors = require('cors')

//8.
const dataService = require('./services/dataService')

//2.create an server app using express
const app = express()

//4.to parse json data
app.use(express.json())

//6. Using cors specify origin to server app
app.use(cors({
  origin: 'http://localhost:4200'
}))

//3.set up port for server application
app.listen(3000, () => {
  console.log('Server started at 3000');
})

//7.Resolving Api in index.js
//getAllProducts API
app.get('/all-products', (req, res) => {
  console.log('Inside getAllProducts function');
  dataService.getAllProducts()
    .then((result) => {
      res.status(result.statusCode).json(result)
    })
})

//9.add-to-wishlist API
app.post('/add-to-wishlist', (req, res) => {
  console.log('inside add-to-wishlist function');
  console.log(req.body);
  dataService.addToWishlist(req.body.id, req.body.title, req.body.price, req.body.description, req.body.image)
    .then((result) => {
      res.status(result.statusCode).json(result)
    })
})

//10.getWishlist API
app.get('/get-wishlist', (req, res) => {
  console.log('inside getWishlist function');
  dataService.getWishlist()
    .then((result) => {
      res.status(result.statusCode).json(result)
    })
})

//11.delete-item-wishlist
app.delete('/delete-item-wishlist/:id', (req, res) => {
  console.log('inside delete-item-wishlist fucntion ');
  dataService.deleteFromWishlist(req.params.id)
    .then((result) => {
      res.status(result.statusCode).json(result)
    })
})