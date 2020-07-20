import React from 'react';
import firebase from 'firebase';
import firestore from '../components/firebaseConfig';
import AssignmentThree from "../components/assignmentThree";

interface DataRecord {
    'meta-data': {
      date: string;
      latitude: number;
      longitude: number;
      time: string;
    };
    'sensor-data': {
      humidity: number;
      temperature: number;
      windspeed: number;
    };
    'student-data': {
        address: string;
        'first-name': string;
        'last-name': string;
        'student-number': string;
    };
  }

interface ComponentDataRecordState {
    values:DataRecord[];
}

class AssignmentThreeContainer extends React.Component<{}, ComponentDataRecordState> {
    constructor(props) {
        super(props);
        this.state = { values: [] };
    }

    componentDidMount() {
        const component = this;

        /*RealTime Firebase*/
        firebase.database().ref().on('value', function (snapshot) {
            const rawData = (snapshot.val() as Object);
            const records = Object.values(rawData)
                .filter((entry) => {
                    return !!entry['student-data'];
                })
                .map((entry) => entry as DataRecord);
            component.setState({ values: records });
            // console.log({ firebase: component.state });
        });
    }

    render() {
        return <AssignmentThree values={this.state.values} />
    }
}

export default AssignmentThreeContainer;