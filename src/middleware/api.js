const SERVER_PATH = 'http://localhost:3000/'

const fetchApi = (action,store) =>{
  return fetch(SERVER_PATH+action.endpoint, action.props).then((response)=>{
    return response.json()
  }).catch((error) => {console.log("err: ",err);action.callbackErr(error)})
}

export const CALL_API = 'CALL_API'
export default store => next => action => {
  const callAPI = action[CALL_API]
  if(typeof callAPI === 'undefined') return next(action)
  else {
    console.log(callAPI)
    const [ successType, failureType ] = callAPI.types
    const { isChanged } = callAPI
    const actionWith = (newInfo) => {
      const newAction = Object.assign({}, action, newInfo)
      delete newAction[CALL_API];
      return newAction
    }
    return fetchApi(callAPI, store).then(
      payload => {
        next(actionWith({
          payload,
          type: successType,
          isChanged
        }))
      },
      error =>{
        next(actionWith({
          erroMsg: error.message,
          type: failureType
        }))
      }
    )
  }
}
