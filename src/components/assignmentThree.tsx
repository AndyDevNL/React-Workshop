import React from 'react';
import firestore from './firebaseConfig';

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

class AssignmentThree extends React.Component <ComponentDataRecordState,{}> {

  render() {
    let data = this.props.values;
    console.log(data);
    // Maak je eigen visualisatie van de data. 
    // Bijvoorbeeld dat de kleur veranderd gebasseerd op koude, 
    // gemiddelde of warme temperatuur.
    // Alle data zit zoals gewoonlijk weer in het data variable.

    return(
      <div className="row">
        <div className="col s12">
          <p>Maak hier je eigen visualisatie van de homestations data!</p>
        </div>
      </div>
    );
  }
}

export default AssignmentThree;