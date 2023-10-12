import Card from "./components/Card";

function App() {
  const odeljenje = [
    {
      ime: "Aldin",
      prezime: "Halilovic",
      godine: 20,
      visina: 180,
    },
    {
      ime: "Tajra",
      prezime: "Bacevac",
      godine: 17,
      visina: 210,
    },
    {
      ime: "Iman",
      prezime: "Licina",
      godine: 18,
      visina: 170,
    },
    {
      ime: "Mehmed",
      prezime: "Muratovic",
      godine: 16,
      visina: 185,
    },
  ];

  const osoba = {
    ime: "neko",
    prezime: "nesto",
    godine: 100,
    visina: 300,
  };

  //   <Card
  //   ime={osoba.ime}
  //   prezime={osoba.prezime}
  //   godine={osoba.godine}
  //   visina={osoba.visina}
  // />

  return (
    <div className="container">
      {odeljenje.map((el) => {
        if (el.godine > 18) {
          return (
            <Card
              ime={el.ime}
              prezime={el.prezime}
              godine={el.godine}
              visina={el.visina}
            />
          );
        }
      })}
    </div>
  );
}

export default App;
