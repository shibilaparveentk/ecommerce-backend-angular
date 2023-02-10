//1.import mongoose 
const mongoose = require('mongoose')

//2.define the connection string using mongoose
mongoose.connect('mongodb://localhost:27017/sCart', () => {
  console.log('MongoDb connected successfully');
})

//3.create model
//product schema
const Product = mongoose.model('Product', {
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number
  }
})


//5.wishlist
//wishlist schema
const Wishlist = mongoose.model('Wishlist', {
  id: Number,
  title: String,
  price: Number,
  description: String,
  image: String,
})


//4. export model to be used in another file
module.exports = {
  Product,
  Wishlist
}