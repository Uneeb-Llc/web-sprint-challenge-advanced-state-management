import axios from 'axios';

const headers = {
    Accept: "application/json"
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

export const fetchSmurfs = () => (dispatch) => {
    // dispatch a fetching smurfs start action
    dispatch ({ type: 'FETCHING_SMURFS_START'    })
    // hit the API, with success and failure cases dispatching apprpiate actions

    axios.get("http://localhost:3333/smurfsGFDJG", {headers: headers})
    .then(res => {
        
        dispatch({ type: "FETCHING_SMURFS_SUCCESS" , payload: res.data})
        // console.log("API resonse", res)
    })
    .catch(err => {
        dispatch({ type: "FETCHING_SMURFS_ERROR" ,
         payload: `${err.response.data}`, code: `${err.response.status}`})
        console.log(err.response.data, err.response.status);
    })
}


