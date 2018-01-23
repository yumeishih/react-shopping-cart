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
    let index=-1;
    for(let i=0;i<cart.length;i++){
        if(cart[i].itemID===item.itemID) {
            index=i;
            break;
        }
    }
    if( index === -1){
        const updateItem = JSON.parse(JSON.stringify(item))
        updateItem['qty'] = qty
        cart.push(updateItem);
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
