
export const initialState = {
    smurfs: [],
    
    
    isLoading: false,

    error: ""
    
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_SMURFS_START":
            // console.log("FETCHING SMURFS")
        return {
            ...state,
            isLoading: true
        }

        case "FETCHING_SMURFS_SUCCESS":
            const newSmurfs = action.payload;
            return {
                ...state,
                smurfs: newSmurfs,
                isLoading: false,
                error: ""
                
            }

        case "FETCHING_SMURFS_ERROR":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary