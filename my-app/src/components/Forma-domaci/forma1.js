import Output from "./Output.js";
// import "./forma1.css";
import React, { useState } from "react";
function Forma1({ addCard, cards }) {
  const [selectedOption, setSelectedOption] = useState("da");
  const [imePrezime, setImePrezime] = useState("");
  const [Prezime, setPrezime] = useState("");
  const [godine, setGodine] = useState("");
  const [grad, setGrad] = useState("");
  const [hobi, setHobi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { imePrezime, Prezime, godine, grad, hobi, selectedOption };

    addCard(info);

    setImePrezime("");
    setGodine("");
    setGrad("");
    setHobi("");
  };

  return (
    <div className="login">
      <h2>Unesite podatke</h2>
      <form onSubmit={handleSubmit}>
        <div className="user">
          <input
            type="text"
            id="txt"
            required
            value={imePrezime}
            onChange={(e) => setImePrezime(e.target.value)}
          />
          <label for="txt">Ime</label>
        </div>
        <div className="user">
          <input
            type="text"
            id="txt"
            required
            value={Prezime}
            onChange={(e) => setPrezime(e.target.value)}
          />
          <label for="txt">Prezime</label>
        </div>
        <div className="password">
          <input
            type="number"
            id="pass"
            required
            value={godine}
            onChange={(e) => setGodine(e.target.value)}
          />
          <label for="pass">Godine</label>
        </div>
        <div className="user">
          <input
            type="text"
            id="pass"
            required
            value={grad}
            onChange={(e) => setGrad(e.target.value)}
          />
          <label for="pass">Grad</label>
        </div>
        <div className="user">
          <input
            type="text"
            id="pass"
            required
            value={hobi}
            onChange={(e) => setHobi(e.target.value)}
          />
          <label for="pass">Hobi</label>
        </div>
        <div className="checkbox">
          <p>Zauzet?</p>
          <div className="child-checkbox">
            <label>
              <input
                type="radio"
                value="da"
                checked={selectedOption === "da"}
                onChange={() => setSelectedOption("da")}
              />
              <p>Da</p>
            </label>
            <label>
              <input
                type="radio"
                value="ne"
                checked={selectedOption === "ne"}
                onChange={() => setSelectedOption("ne")}
              />
              <p>Ne</p>
            </label>
          </div>
        </div>
        <div className="button">
          <button className="submit" href="#">
            Submit
          </button>
        </div>
        {/* <p>{imePrezime}</p> */}
      </form>
      <Output cards={cards} />
    </div>
  );
}

export default Forma1;
