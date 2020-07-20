import React from 'react';
import firebase from 'firebase';
import firestore from '../components/firebaseConfig';
import AssignmentOne from "../components/assignmentOne";

class AssignmentOneContainer extends React.Component <{},{buttonState:boolean}> {
    constructor(props) {
        super(props);
        this.state = {buttonState: false};
    }

    componentDidMount() {
        const component = this;
  
        /*RealTime Firebase*/
        firebase.database().ref("ReactWorkshop/AssingmentOne/buttonState").on('value', function (snapshot) {
            component.setState({buttonState: snapshot.val()})
            console.log(component.state);
        });
    }
    
    render() {
        console.log('rerender');
        return <AssignmentOne buttonState={this.state.buttonState}/>
    }
}

export default AssignmentOneContainer;