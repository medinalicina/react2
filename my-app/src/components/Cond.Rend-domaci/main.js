import React, { useState } from "react";
import "./main.css";
function Main() {
  const [randomNum, setRandomNum] = useState(null);
  const [pozadina, setPozadina] = useState("");

  const generateRandomNum = () => {
    const random = Math.floor(Math.random() * (46 - -38 + 1)) + -38;
    setRandomNum(random);

    if (random >= -38 && random < -5) {
      setPozadina(
        "https://1.bp.blogspot.com/-oJOC5GCA5Bs/WG6bIACd1JI/AAAAAAAAAEE/hq4oGpMOblUhTo0kC6TdAqsfx-z96Fz6wCLcB/s1600/zima1.jpg"
      );
    } else if (random >= -5 && random < 20) {
      setPozadina(
        "https://naissus.info/wp-content/uploads/2019/03/Prole%C4%87e-ilustracija-750x430-696x399.jpg"
      );
    } else {
      setPozadina(
        "https://seekingmagazine.com/wp-content/uploads/2021/06/opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg"
      );
    }
  };

  const styles = {
    backgroundImage: `url(${pozadina})`,
    color: "white",
    backgroundSize: "cover",
  };

  console.log(styles);

  return (
    <div className="main" style={styles}>
      <div className="output">
        <div className="broj"></div>
        <h1>temperatura : {randomNum}</h1>
      </div>
      <div className="btn">
        <button onClick={generateRandomNum}>click me</button>
      </div>
    </div>
  );
}

export default Main;

// random broj -36 --- +48
// -36 --- -5 hladno je
// -5 --- 20 prijatno
// 20 --- 48 vrelo
// treba da ubacim massage koji se displeya
// ne radi mi slika
// prvo probaj da ubacis sliku ovde kao fajla a ne preko url-a
