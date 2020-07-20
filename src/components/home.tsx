import React from 'react';

const Home = () => {
  let VoorbeeldArrayStudents = [
    {
      naam: "Andreas",
      leeftijd: "24",
      studentnummer: "0876986",
      gadgets: {
        mobiel: "samsung",
        laptop: "MSI"
      }
    },
    {
      naam: "Jeroen",
      leeftijd: "21",
      studentnummer: "1234567",
      gadgets: {
        mobiel: "iPhone",
        laptop: "Macbook Pro"
      }      
    },
    {
      naam: "Damian",
      leeftijd: "21",
      studentnummer: "9876543",
      gadgets: {
        mobiel: "Galaxy",
        laptop: "Asus"
      }      
    },
  ];

  let mapExample = VoorbeeldArrayStudents.map( student => {
      return(
        <div>
          <p>{student['naam']}</p>
          <p>{student['leeftijd']}</p>
          <p>{student['gadgets']['laptop']}</p>
        </div>
      )
  })

  /*Deze return functie laat zien wat getoont moet worden op de pagina*/
  return (
    <div className="row">
      <div className="col s12 m6 yellow">
        <p>hoi</p>
      </div>
      <div className="col s12 m6 blue">
      <p>Doei</p>
      </div>
      <div className="col s12 blue">
        <p>
          {mapExample}
        </p>
      </div>
    </div>
  )
}

export default Home;