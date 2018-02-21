const ItemList = [
  {
    itemID: 'item1',
    itemImg: './src/assets/imgs/items/bear.jpg',
    itemName: 'Bear',
    describe: 'aaaa',
    price: 1
  },
  {
    itemID: 'item2',
    itemImg: './src/assets/imgs/items/hellokitty.jpg',
    itemName: 'HelloKitty',
    describe: 'bbbb',
    price: 2
  },
  {
    itemID: 'item3',
    itemImg: './src/assets/imgs/items/snoopy.jpg',
    itemName: 'Snoopy',
    describe: 'cccc',
    price: 3
  },
  {
    itemID: 'item4',
    itemImg: './src/assets/imgs/items/nick.jpg',
    itemName: 'Nick',
    describe: 'dddd',
    price: 4
  },
  {
    itemID: 'item5',
    itemImg: './src/assets/imgs/items/davis.jpg',
    itemName: 'Davis',
    describe: 'eeee',
    price: 5
  }
];

const express = require('express')
const app = express()
// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});
app.get('/', (req, res) => res.send(ItemList))

app.listen(3000, () => console.log('Example app listening on port 3000!'))