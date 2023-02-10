
//1
const db = require('./db')

//2. getAllProducts
const getAllProducts = () => {
  return db.Product.find()
    .then((data) => {
      if (data) {
        return {
          statusCode: 200,
          result: data
        }
      }
      else {
        return {
          statusCode: 404,
          message: 'Failed to fetch data from database'
        }
      }
    })
}

//4.add-to-wishlist
const addToWishlist = (id, title, price, description, image) => {
  return db.Wishlist.findOne({
    id
  }).then((result) => {
    if (result) {
      return {
        statusCode: 404,
        message: "Product already in your wishlist",
      };
    } else {
      const newProduct = new db.Wishlist({
        id,
        title,
        price,
        description,
        image
      });
      newProduct.save()
      return {
        statusCode: 200,
        message: 'Product successfully added in your wishlist'
      }
    }
  })
}

//5.get-wishlist
const getWishlist = () => {
  return db.Wishlist.find().then((data) => {
    if (data) {
      return {
        statusCode: 200,
        result: data
      };

    } else {
      return {
        statusCode: 404,
        message: "Your wishlist is empty"
      }
    }
  })
}


//deleteFromWishlist
const deleteFromWishlist = (id) => {
  return db.Wishlist.deleteOne({
    id
  })
    .then(
      (data) => {
        if (data) {
          //return {
          // statusCode: 200,
          // message: 'Product removed from your wishlist',
         // };

         return db.Wishlist.find()
         .then((data)=>{
          if(data){
            return{
              statusCode:200,
              wishlist:data,
              message:'product removed from your wishlist'
            }
          }
          else{
            return{
              statusCode:404,
              message:'Your Wishlist is empty'
            }
          }
         })
        }
        else {
          return {
            statusCode: 404,
            message: 'Product not available'
          }
        }
      }
    )
}




//3.export
module.exports = {
  getAllProducts,
  addToWishlist,
  getWishlist,
  deleteFromWishlist
}