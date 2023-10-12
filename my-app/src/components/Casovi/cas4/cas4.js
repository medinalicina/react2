import Card from "./components/Card";
import { useState } from "react";

function App() {
  // const odeljenje = [
  //   {
  //     ime: "Aldin",
  //     prezime: "Halilovic",
  //     godine: 20,
  //     visina: 180,
  //   },
  //   {
  //     ime: "Tajra",
  //     prezime: "Bacevac",
  //     godine: 17,
  //     visina: 210,
  //   },
  //   {
  //     ime: "Iman",
  //     prezime: "Licina",
  //     godine: 18,
  //     visina: 170,
  //   },
  //   {
  //     ime: "Mehmed",
  //     prezime: "Muratovic",
  //     godine: 16,
  //     visina: 185,
  //   },
  // ];

  // const osoba = {
  //   ime: "neko",
  //   prezime: "nesto",
  //   godine: 100,
  //   visina: 300,
  // };

  // const mojeGodine = 25;

  // const checkAge = () => {
  // console.log("nesto");
  // if (mojeGodine > 20) {
  //   return <h1>Ima</h1>;
  // }
  // };

  // checkAge();

  // if (mojeGodine < 30) {
  //   console.log("NE MOZE");
  //   return <h1>Nema</h1>;
  // }

  // checkAge();

  // setMojBroj((prev) => prev + 128937128937920);

  // const [mojBroj, setMojBroj] = useState("nikola");
  // 4

  // const [inputValue, setInputValue] = useState("");

  // const [djak, setDjak] = useState("Mehmed");

  const [brojevi, setBroj] = useState([12, 6, 35, 15, 21, 22, 30, 31, 9, 99]);
  const [noviBroj, setNoviBroj] = useState(0);
  const [ja, setJa] = useState({
    ime: "Aldin",
    prezime: "Halilovic",
  });

  // console.log(brojevi);
  console.log(ja);

  return (
    <div className="container">
      {/* {mojBroj}
      <button onClick={() => setMojBroj("dzelal")}>Povecaj za jedan</button> */}
      {/* <input
        // type="text"
        onChange={(e) => setDjak(e.target.value)}
        value={djak}
      />
      <button onClick={() => console.log(djak)}>Hello</button> */}
      {/* <input
        placeholder="Dodaj broj"
        value={noviBroj}
        onChange={(e) => setNoviBroj(e.target.value)}
      /> */}
      {/* <button
        onClick={() =>
          setBroj((prev) => [...prev, noviBroj]) || setNoviBroj("")
        }
      >
        Dodaj broj
      </button> */}

      <input
        type="text"
        value={ja.prezime}
        onChange={(e) => setJa({ ...ja, prezime: e.target.value })}
      />
      <button
        onClick={() => {
          setBroj((prev) => [...prev, noviBroj]);
          setNoviBroj("");
        }}
      >
        Dodaj broj
      </button>
    </div>
  );
}

export default App;

// {
// ime:
// prezime:
// godine:
// visina
// }
