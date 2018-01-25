import ItemList from './itemList';

const storageNameCart = 'Cart';
const storageNameitems = 'ItemList';


export const initItemList = () => {
  localStorage[storageNameitems] = JSON.stringify(ItemList);
};

export const getItemList = () => {
  if (localStorage[storageNameitems]) return JSON.parse(localStorage[storageNameitems]);
  return [];
};

export const getCart = () => {
  if (localStorage[storageNameCart]) return JSON.parse(localStorage[storageNameCart]);
  return [];
};

export const getIndex = (item, cart) => {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemID === item.itemID) {
      index = i;
      break;
    }
  }
  return index;
};

export const addToCart = (item, qty) => {
  const cart = getCart();
  const index = getIndex(item, cart);
  if (index === -1) {
    const updateItem = JSON.parse(JSON.stringify(item));
    updateItem.qty = qty;
    cart.push(updateItem);
  } else {
    cart[index].qty = qty;
  }
  localStorage[storageNameCart] = JSON.stringify(cart);
};

export const deleteFromCart = (item) => {
  const cart = getCart();
  const index = getIndex(item, cart);
  cart.splice(index, 1);
  localStorage[storageNameCart] = JSON.stringify(cart);
};

