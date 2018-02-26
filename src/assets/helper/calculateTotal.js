export default (cart)=>{
  console.log("helper: ",cart.map((item)=>{return item.qty*item.price}).reduce((acc,cet) => acc+cet,0))
  return 10000;
}