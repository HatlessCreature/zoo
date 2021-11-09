// import logo from './logo.svg';
import './App.css';

function App() {
  const animals = [
    { id: "1", species: "Usrus Arctos", name: "Djole", dateOfBirth: new Date() },
    { id: "2", species: "Canis lupus", name: "Reks", dateOfBirth: new Date() },
    { id: "3", species: "Panthera tigris", name: "Meca", dateOfBirth: new Date() },
    { id: "4", species: "Panthera leo", name: "Kori", dateOfBirth: new Date() },
    { id: "5", species: "Lynx lynx", name: "Rogonja", dateOfBirth: new Date() },
    { id: "6", species: "Lynx lynx", name: "Rogonja 2", dateOfBirth: null },
    { id: "7", species: "Lynx lynx", name: "Rogonja 3", }
  ];


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.species}</td>
              <td>{animal.name}</td>
              <td>{animal.dateOfBirth ? (animal.dateOfBirth.toISOString()) : ("Nepoznat")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
