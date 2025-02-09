import { GET, SCORE_DATA } from "./Action/ActionType";

//central state
const initistate = {
  users: [],
  score: [],
}

const reducer = (state = initistate, action) =>{

switch(action.type){
  case GET:
  return {...state, users: action.payload.httpresponse}  
  case SCORE_DATA:
  console.log(action.payload);
  return {...state, score: [...state.score, action.payload]}  
  default:
  return state;
}
  
}

export default reducer;