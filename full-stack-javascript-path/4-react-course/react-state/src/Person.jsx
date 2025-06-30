import React, { useState } from "react";
// import "./App.css";

// export function Person() {
//   const [person, setPerson] = useState({ name: "John", age: 100 });
//   const handleIncreaseAge = () => {
//     // copy the existing person object into a new object
//     // while updating the age property
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//   };

export function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [surName, setSurName] = useState("");
  const fullName = person.name + " " + surName;

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  function handleFirstNameChange(firstName2) {
    // setPerson(firstName['name'].target.value);
    setPerson({ ...person, name: firstName2.target.value });
    console.log("Person: " + person.name);
  }

  function handleSurNameChange(surnameChange) {
    setSurName(surnameChange.target.value);
  }

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <label>First Name:</label>
      <input value={person.name} onChange={handleFirstNameChange}></input>
      <label>Last Name:</label>
      <input value={surName} onChange={handleSurNameChange}></input>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
