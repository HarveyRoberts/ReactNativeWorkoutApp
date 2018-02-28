import { 
    INCREMENTED_WORKOUT_COUNT,
    HIGHSCORE_CHANGED
} from './Types';

export const incrementedWorkoutCount = () => ({
    //Automatically dispatches
    type: INCREMENTED_WORKOUT_COUNT
});
export const highscoreChanged = (amount) => ({
    //Automatically dispatches
    type: HIGHSCORE_CHANGED,
    payload: amount
});
