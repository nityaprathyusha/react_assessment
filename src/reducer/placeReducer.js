import * as actionTypes from "../actions/actionType";

const PlaceReducer = (state={placesData: []} ,action) => {

    switch(action.type){
        case actionTypes.FEATCH_PLACES:
            return {placesData: action.payload};
        default :
        return state;
    }
};
export default PlaceReducer;