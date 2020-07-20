import React from 'react';
import firestore from './firebaseConfig';

class AssignmentOne extends React.Component <{buttonState:boolean},{}> {

  render() {
    const data = this.props.buttonState;
    let objectKleur = "yellow";
    console.log(data);
    /*
    Het variable data heeft de toggle van de button, gebruik deze om de kleur te veranderen van de div.

    Bonus opdracht: Verander ook de tekst in het div gebaseerd op de data.
    */

    /* Begin je code vanaf hier */
    if(data) {
      objectKleur = "red";
    }
  
    else{
      objectKleur = "blue";
    }
    /* Eindig je code hier*/ 

    return(
      <div className="row">
        <p>Hier is opdracht 1, als ik op de knop druk moet de kleur veranderen</p>
        <div className={`col s12 ${objectKleur}`}>
          <p>
            Toggle Blauw of Rood
          </p>
          <p>
            {objectKleur}  
          </p>
        </div>
      </div>
    )
  }
}

export default AssignmentOne;