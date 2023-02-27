import logo from './logo.svg';
import './App.css';
import PersonalCard from './components/PersonCard';

function App() {
  return (
    <>
      <PersonalCard
      firstName={"Ignacio"}
      lastName={"Labarca"}
      age={28}
      hairColor={"Negro"}
      />
      <PersonalCard
      firstName={"Pedro"}
      lastName={"Lira"}
      age={39}
      hairColor={"Azul"}
      />
      <PersonalCard
      firstName={"Juan"}
      lastName={"Lorca"}
      age={18}
      hairColor={"Gris"}
      />
      <PersonalCard
      firstName={"Jaime"}
      lastName={"Pirlo"}
      age={48}
      hairColor={"Amarillo"}
      />
      <PersonalCard
      firstName={"Alexis"}
      lastName={"Sanchez"}
      age={35}
      hairColor={"Negro"}
      />
      </>
  );
}

export default App;
