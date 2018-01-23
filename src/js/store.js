import ItemList from "./itemList";

export default function Store(){
    this.storageNameCart= 'Cart';
    this.storageNameitems='ItemList';
}

Store.prototype.initItemList = function() {
    localStorage[this.storageNameitems] = JSON.stringify(ItemList);
};

Store.prototype.getItemList = function(){
    return JSON.parse(localStorage[this.storageNameitems]);
};

Store.prototype.getCart = function(){
    if(localStorage[this.storageNameCart]) return JSON.parse(localStorage[this.storageNameCart]);
    else return [];
};

Store.prototype.addToCart = function(item,qty){
    const cart = this.getCart();
    console.log(cart)
    for(var i=0;i<cart.length;i++){
        if(JSON.stringify(item)===JSON.stringify(cart[i])) break;
    }
    const index = i;
    if( index == cart.length){
        item["qty"] = qty;
        cart.push(item);
    }
    else{
        cart[index].qty = qty;
    }

    localStorage[this.storageNameCart] = JSON.stringify(cart);
}

Store.prototype.deleteFromCart = function(item){
    const cart = this.getCart();
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    localStorage[this.storageNameCart] = JSON.stringify(cart);
}
