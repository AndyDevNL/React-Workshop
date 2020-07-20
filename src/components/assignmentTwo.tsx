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

class AssignmentTwo extends React.Component <ComponentDataRecordState,{}> {

  render() {
    let data = this.props.values;
    console.log(data);
    
    /*Begin je code hier */
    // let tableData = data.map(/*Maak hier JSX elementen per student*/
    
    // )
    //Bonus opdracht: zorg ervoor dat er geen lege kolommen worden getoont
    /*Eindig je code hier */
    function isTrue(dataObject) {
      if(dataObject) {
        return(
          <div>
            <div className="col s6 blue lighten-3">
            <p>
              Achternaam:
            </p>
            </div>
            <div className="col s6 blue lighten-3">
              <p>{dataObject}</p>
            </div>
          </div>
        )
      }
      else {
        return(
          <div>
            <div className="col s6 blue lighten-3">
            <p>
              Achternaam:
            </p>
            </div>
            <div className="col s6 blue lighten-3">
              <p>Geen Achternaam</p>
            </div>
          </div>
        )        
      }
    }

    let tableData = data.map(student => {
      return(
        <div className="row">
          <div className="col s12">

            <div className="col s6">
              <div className="col s6 blue">
                <p>Voornaam:</p>
              </div>
              <div className="col s6 blue">
                <p>{student['student-data']['first-name']}</p>
              </div>
              {isTrue(student['student-data']['last-name'])}
              <div className="col s6 blue">
                <p>Studentnummer:</p>
              </div>
              <div className="col s6 blue">
                <p>{student['student-data']['student-number']}</p>
              </div>              
            </div>

            <div className="col s6">
              <div className="col s6 yellow">
                <p>Temperatuur:</p>
              </div>

              <div className="col s6 yellow">
                <p>{student['sensor-data']['temperature']}</p>
              </div>

              <div className="col s6 yellow darken-3">
                <p>Luchtvochtigheid:</p>
              </div>

              <div className="col s6 yellow darken-3">
                <p>{student['sensor-data']['humidity']}</p>
              </div>

              <div className="col s6 yellow">
                <p>Windsnelheid:</p>
              </div>

              <div className="col s6 yellow">
                <p>{student['sensor-data']['windspeed']}</p>
              </div>
              
            </div>
          </div>
        </div>
      )
    })

    return(
      /* Zet hier neer welke variable de map functie terug geeft */
      <div>
        <p>Laat alle data van de database gestructureerd zien!</p>
        {tableData}
      </div>
    );
  }
}

export default AssignmentTwo;