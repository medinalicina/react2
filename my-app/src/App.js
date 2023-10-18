import "./App.css";
import Cas6 from "./components/Casovi/cas6/cas6";
// import Card from "./components/Card/Card";
import Forma1 from "./components/Forma-domaci/forma1";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Paginacija from "./components/Paginacija-domaci/Paginacija";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

//JSX
function App() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [godiste, setGodiste] = useState("");
  const [zanimanje, setZanimanje] = useState("");

  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    const objekat = {
      Ime: ime,
      Prezime: prezime,
      Godiste: godiste,
      Zanimanje: zanimanje,
    };
    console.log(objekat);
  };

  const addCard = (data) => {
    setCards((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <>

<BrowserRouter>
        <Routes>
            <Route  path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </BrowserRouter></>
  // <>
  //   <Paginacija />
  // </>
    )
//     // <>
//     // <Paginacija-domaci>
//     //   </>
    // {/* // <>
//     //   <Cas11 />
//     // </>
//     // <>
//     //   <Search />
//     // </>
//     // <>
//     //   <Cas10></Cas10>
//     // </>
//     // <>
//     //   <Cas9></Cas9>
//     // </>
//     // <>
//     //   <Fatch></Fatch>
//     // </>
//     // <>
//     //   <Cas8></Cas8>
//     // </>
//     // <>
//     //   <Main></Main>
//     // </>
//     // <>
//     //   <Cas7></Cas7>
//     // </>
//     // <div className="main">
//     //   <Cas6 />
//     // </div>
//     // <>
//     //   <Forma1 addCard={addCard} cards={cards} />
//     // </>

//     // <div className="main">
//     //   <div className="forma">
//     //     <input
//     //       placeholder="Ime"
//     //       value={ime}
//     //       onChange={(e) => setIme(e.target.value)}
//     //     ></input>
//     //     <input
//     //       placeholder="Prezime"
//     //       value={prezime}
//     //       onChange={(e) => setPrezime(e.target.value)}
//     //     ></input>
//     //     <input
//     //       placeholder="Godiste"
//     //       value={godiste}
//     //       onChange={(e) => setGodiste(e.target.value)}
//     //     ></input>
//     //     <input
//     //       placeholder="Zanimanje"
//     //       value={zanimanje}
//     //       onChange={(e) => setZanimanje(e.target.value)}
//     //     ></input>
//     //     <div className="btn">
//     //       <button onClick={handleSubmit}>submit</button>
//     //     </div>
//     //   </div>
//     // </div>
//   // );
// // }
// //use state sluzi da bi cuvali neko stanje koje cemo da menjamo
// // forma ime prezime god i button submit na submit da console loga taj objekat radi se preko state defualt value prazan string za sve
// // 2 konzologas ceo obj i vidi dal ispisuje na svki klik ako ispisuje izbegni trebace drugi statovi
  }
export default App;
