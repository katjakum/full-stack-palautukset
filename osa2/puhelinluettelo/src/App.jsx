import { useState } from "react";
import "./app.css";

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0441231231" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNum] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personExists = persons.some((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (personExists && numberExists) {
      window.alert(`${newName} and ${newNumber} are already in the phonebook`);

    } else if (personExists) {
      window.alert(`${newName} is already in the phonebook`);

    } else if (numberExists) {
      window.alert(`${newNumber} is already in the phonebook`);

    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNum("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
