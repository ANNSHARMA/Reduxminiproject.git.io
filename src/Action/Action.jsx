import { GET, SCORE_DATA} from "./ActionType";
import axios from "axios";

export const getData = () =>{
  return (dispacth) =>{
    try{
    axios.get('https://ultimate-tennis1.p.rapidapi.com/global_players_stats/serve/career/all',{
      headers: {
        'x-rapidapi-key': '53856e8622mshf4f81d1d7f29d55p14114fjsn82cac1895aed',
        'x-rapidapi-host': 'ultimate-tennis1.p.rapidapi.com'
      }
    }).then((res)=>{
      console.log(res);
      //self invoking function.
      dispacth(((data)=>{
      return{
        type: GET,
        payload:{
        httpresponse: data,
        }
      }
      })(res.data)
    );
    })
    }catch(err){
console.log(err);
    }
  }
}


export const submitdata = (data) =>{
  return{
    type: SCORE_DATA,
  payload: data,
  }
}



