import Card from "./Card";
// import "./output.css";
import { useState } from "react";

function Output({ cards }) {
  return (
    <div className="output">
      <div className="naslov">
        <h2>Podaci</h2>
        <div className="cards">
          {cards.map((data, index) => (
            <Card key={index}>
              <div className="output-kartica">
                <h3>
                  <span className="keys">Ime: </span>
                  <span class="props-stil">{data.imePrezime}</span>
                </h3>
                <h3>
                  <span className="keys">Prezime: </span>
                  <span class="props-stil">{data.Prezime}</span>
                </h3>
                <h3>
                  <span className="keys">Godine: </span>
                  <span class="props-stil">{data.godine}</span>
                </h3>
                <h3>
                  <span className="keys">Grad: </span>
                  <span class="props-stil">{data.grad}</span>
                </h3>
                <h3>
                  <span className="keys">Hobi: </span>
                  <span class="props-stil">{data.hobi}</span>
                </h3>
                <h3>
                  <span className="keys">Zauzet: </span>
                  <span class="props-stil">{data.selectedOption}</span>
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Output;
