import React from 'react';
import Smurf from './Smurf';
import {fetchSmurfs} from "../actions";
import {connect} from 'react-redux';

class SmurfDisplay extends React.Component {
    render() {
        const {fetchSmurfs} = this.props;
        return(
        <div className="smurf-display">
            {
            this.props.smurfs.map((smurf) => {
            console.log(smurf);
                return (
                    <Smurf smurf={smurf}/>
                )
            })
            }
            <button onClick={fetchSmurfs}>hit me</button>
          
        </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       smurfs: state.smurfs
   }
}

const mapDispatchToProps = {fetchSmurfs}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.