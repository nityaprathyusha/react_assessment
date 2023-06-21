import axios from "axios";
import * as actionType from "./actionType";

export const featchPlaces= () => {
    const response =  axios.get("/places.json");
   return dispatch => {
     response.then(result => {     
         dispatch({ type: actionType.FEATCH_PLACES , payload: result.data});
    });
 }
};