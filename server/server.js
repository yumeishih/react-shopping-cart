/* Connect to the database */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
//mongoose.promise = Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Database Connected.");
});

const express = require('express'),
      bodyParser = require('body-parser'), //parses information from POST
      ItemList = require('./model/items'),
      Cart = require('./model/cart')

const app = express()
// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});
app.use(bodyParser.json({ extended: true }))

/* ItemList */
app.get('/itemlist', (req, res) => {
  ItemList.find( (err, itemList) => {
    if (err) return console.error(err);
    res.send(itemList)
  });
})

/* Cart */
app.get('/cart', (req, res) => {
  Cart.find( (err, cartItem) => {
    if (err) return console.error(err);
    console.log('getcart: ' , cartItem)
    res.send(cartItem)
  });
})

app.post('/addtocart', (req, res) => {
  Cart.create(req.body, (err, cartItem) =>{
    console.log('addtocart: ',cartItem)
    if(err) console.error(err);
    res.send(cartItem)
  })
})

app.post('/:id/updatecart', (req, res) => {
  Cart.update({itemID: req.params.id}, req.body,(err, cartItem) =>{
    if(err) console.error(err);
    console.log('update: ',cartItem)
    res.send(cartItem)
  })
})

app.get('/:id/deletecart', (req, res) => {
  Cart.remove({itemID: req.params.id}, (err, cartItem) =>{
    if(err) console.error(err);
    console.log('deletecart: ',cartItem)
    res.send(cartItem)
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))