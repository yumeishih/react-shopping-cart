const fetchMiddleware = store => next => action => {
  if(action.type !== 'FECTH_ITEMLIST') return next(action)
  fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(json => action.cb(json, store.dispatch))
  .catch((err) => { throw new Error(err.message) })
}

export default fetchMiddleware