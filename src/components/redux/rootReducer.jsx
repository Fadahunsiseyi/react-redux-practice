
import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer"
import reducer from "./user/userReducer";

const rootReducer = combineReducers({
   cake: cakeReducer, 
   iceCream:  iceCreamReducer,
   user: reducer
})

export default rootReducer