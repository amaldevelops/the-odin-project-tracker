const express = require("express");

const apicache = require("apicache"); //simple in-memory cache

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let cache = apicache.middleware;
app.use(cache("5 minutes"));

// employees data in a database
const employees = [
  { firstName: "Jane", lastName: "Smith", age: 20 },
  //...
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Mary", lastName: "Green", age: 50 },
];

app.get("/employees", (req, res) => {
  const { firstName, lastName, age } = req.query;
  let results = [...employees];
  if (firstName) {
    results = results.filter((r) => r.firstName === firstName);
  }

  if (lastName) {
    results = results.filter((r) => r.lastName === lastName);
  }

  if (age) {
    results = results.filter((r) => +r.age === +age);
  }
  res.json(results);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

//Versioning our APIs

app.get('/v1/employees', (req, res) => {
    const employees = [];
    // code to get employees
    res.json(employees);
  });
  
  app.get('/v2/employees', (req, res) => {
    const employees = [];
    // different code to get employees
    res.json(employees);
  });
  

app.listen(3000, () => console.log("server started"));
