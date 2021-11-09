// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [animals, setAnimals] = useState([
    { id: 1, species: "Usrus Arctos", name: "Djole", dateOfBirth: new Date() },
    { id: 2, species: "Canis lupus", name: "Reks", dateOfBirth: new Date() },
    { id: 3, species: "Panthera tigris", name: "Meca", dateOfBirth: new Date() },
    { id: 4, species: "Panthera leo", name: "Kori", dateOfBirth: new Date() },
    { id: 5, species: "Lynx lynx", name: "Rogonja", dateOfBirth: new Date() },
    { id: 6, species: "Lynx lynx", name: "Rogonja 2", dateOfBirth: null },
    { id: 7, species: "Lynx lynx", name: "Rogonja 3", }
  ]);
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [count, setCount] = useState(7);

  const increaseCount = () => {
    setCount(count + 1);
  };


  const deleteRow = (id) => {
    var updatedAnimals = [...animals];
    var indexToRemove = updatedAnimals.findIndex(x => x.id == id);
    if (indexToRemove > -1) {
      updatedAnimals.splice(indexToRemove, 1)
      setAnimals(updatedAnimals);
    }
  };

  const moveToTop = (id) => {
    var updatedAnimals = [...animals];
    var indexToMove = updatedAnimals.findIndex(x => x.id == id);
    if (indexToMove > -1) {
      var animalToMove = updatedAnimals[indexToMove];
      updatedAnimals.splice(indexToMove, 1)
      updatedAnimals = [animalToMove, ...updatedAnimals]
      setAnimals(updatedAnimals);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(species, name, dateOfBirth);
    setAnimals([...animals, { id: count, species: species, name: name, dateOfBirth: new Date(dateOfBirth) }])
    setSpecies("");
    setName("");
    setDateOfBirth(new Date());
  };

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column', marginBottom: 25 }} onSubmit={handleSubmit}>
        <label>
          Species:
          <input
            placeholder='Species'
            type='text'
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
        </label>
        <label>
          Name:
          <input
            placeholder='Name'
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Date of birth:
          <input
            type='date'
            value={dateOfBirth ? dateOfBirth.toISOString().substr(0, 10) : ""}
            onChange={(e) => {
              setDateOfBirth(new Date(e.target.value));
            }}
          />
        </label>
        <button onClick={increaseCount}>Submit</button>
      </form>
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
              <td>
                <button onClick={() => deleteRow(animal.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => moveToTop(animal.id)}>Move to top</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
