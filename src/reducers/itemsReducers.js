import { INIT_ITEMLIST } from '../actions/index'

export default function(state=[] ,action) {
  switch (action.type) {
    case INIT_ITEMLIST:{
      console.log(action.items)
      return action.items
    }
  }
  return state
}
