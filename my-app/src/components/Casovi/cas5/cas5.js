import React, { useState } from "react";
import "./cas5.css";

function Cas5() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    imePrezime: "",
    zanimanje: "",
    godine: 0,
  });

  const handleInputSecond = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="main">
      <input
        className="input"
        placeholder="Ime i prezime"
        name="imePrezime"
        value={user.imePrezime}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Godine"
        name="godine"
        value={user.godine}
        onChange={handleInputSecond}
      />
      <input
        className="input"
        placeholder="Zanimanje"
        name="zanimanje"
        value={user.zanimanje}
        onChange={handleInputSecond}
      />
      <button
        className="dugme"
        onClick={() => {
          setUsers((prev) => [...prev, user]);
          setUser({ imePrezime: "", godine: 0, zanimanje: "" });
        }}
      >
        Dodaj korisnika
      </button>

      {users.map((user) => {
        return (
          <div style={{ textAlign: "center", color: "white" }}>
            <p>{user.imePrezime}</p>
            <p>{user.godine}</p>
            <p>{user.zanimanje}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cas5;

//  ime i prezime          ime i prezime
//  godine      broj godina
//  mesto rodjenja          Grad
//  stepen skolovanja   3 opcije: osnovna srednja visa
//  zanimanje   input
//  hobi    input
//  partnerStatus    DA/NE
