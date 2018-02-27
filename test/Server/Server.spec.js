var app = require('../../server/server'),
    chai = require('chai'),
    chaiHttp = require('chai-http')
var expect = chai.expect

var fakeitem = {
  itemID: 'fakeitem',
  itemImg: './src/imgs/items/fakeitem.jpg',
  itemName: 'fakeitem',
  describe: 'fakeitem',
  price: 10000,
  qty:2
}
var fakeqty = 10

chai.use(chaiHttp)
describe('App', function() {
  describe('/itemlist', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/itemlist')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('/cart', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/cart')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('/addtocart', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .post('/addtocart')
        .type('json')
        .send(fakeitem)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('/fakeitem/updatecart', function() {
    it('responds with status 200', function(done) {
      fakeitem.qty = fakeqty
      chai.request(app)
        .post('/fakeitem/updatecart')
        .type('json')
        .send(fakeitem)
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('/fakeitem/deletecart', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/fakeitem/deletecart')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
