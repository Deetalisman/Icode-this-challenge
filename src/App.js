import music from "./img/mpc.webp";
import world from "./img/wcc1.png";
import social from "./img/scc.jpg";
import email from "./img/ecc1.png";

const challens = [
  {
    image: music,
    name: "Music Player Challenge",
    number: "83",
    date: "16 Aug. 2018",
    id: 1,
  },
  {
    image: world,
    name: "World Cup Challenge",
    number: "83",
    date: "16 Aug. 2018",
    id: 2,
  },
  {
    image: social,
    name: "Social Platform Challenge",
    number: "83",
    date: "16 Aug. 2018",
    id: 3,
  },
  {
    image: email,
    name: "Email System Challenge",
    number: "83",
    date: "16 Aug. 2018",
    id: 4,
  },
];
export default function App() {
  return (
    <div className="app">
      <Main />
    </div>
  );
}
function Main() {
  return (
    <div className="main">
      <p>Active Challenges</p>
      <Lists />
    </div>
  );
}

function Lists() {
  return (
    <div className="lists">
      {challens.map((challen) => (
        <List challen={challen} key={challen.id} />
      ))}
    </div>
  );
}
function List({ challen }) {
  return (
    <div className="one">
      <div className="two">
        <div className="image">
          <img src={challen.image} alt={challen.id} />
        </div>
        <div className="three">
          <p className="name">{challen.name}</p>
          <div className="four">
            <p className="sub">
              {challen.number} <br></br>
              <span>challengers</span>{" "}
            </p>
            <p className="sub-four sub">
              {challen.date} <br></br> <span>submission date</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <button>SUBMIT</button>
    </div>
  );
}
