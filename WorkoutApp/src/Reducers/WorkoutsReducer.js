import { HIGHSCORE_CHANGED, INCREMENTED_WORKOUT_COUNT } from '../Actions/Types';
import Workouts from '../Workouts';

const INIT_STATE = {
    workouts: Workouts
};


/*reducer compares old state and new state*/
/*takes in action and old state*/
export default (state = INIT_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case HIGHSCORE_CHANGED:
            //need to changed the state correctly because of how JS works
            //basically we need to create immutable state
            //WRONG:state.workouts[0].title = action.payload
            //WRONG:return state
            //WE NEED TO CREATE A NEW OBJECT
            return {
                //take all existing properties on state and throw them into this
                ...state,
                //define email and add it over the top of what was on the state
                //THIS NEEDS TO BE CHANGED SINCE WE ARE NOT UPDATING THE HOLE ARRAY
                workouts: action.payload
            };
        case INCREMENTED_WORKOUT_COUNT:
            return {
                ...state, 
                //THIS NEEDS TO BE CHANGED SINCE WE ARE NOT UPDATING THE HOLE ARRAY
                workouts: action.payload
            };
        default:
            return state;
    }
};
