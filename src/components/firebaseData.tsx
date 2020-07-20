import React from 'react';
import * as firebase from 'firebase';
import firestore from './firebaseConfig';

class FirebaseData  extends React.Component {
    componentDidMount() {
      let weathermapState = this;

      /*RealTime Firebase*/
      firebase.database().ref().on('value', function (snapshot) {
          var snapData = snapshot.val();
          var arr: any[] = [];
          for (var key in snapData) {
              arr.push(snapData[key]);
          }
          weathermapState.setState({data: arr});
      });

      return(
          this.state
      );
  }
}

export default FirebaseData;
