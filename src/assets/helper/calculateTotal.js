export default (cart)=>{
  return cart.map((item)=>{return item.qty*item.price}).reduce((acc,cet) => acc+cet,0)
}