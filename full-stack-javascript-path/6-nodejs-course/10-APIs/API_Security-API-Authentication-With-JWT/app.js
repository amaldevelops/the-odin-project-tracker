const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  //IMPORTANT: This is your secret key. It should be a strong, randomly generated string and kept absolutely secret. Do not hardcode it directly in your code in a production environment. Store it in an environment variable.
  jwt.verify(
    req.token,
    "WhatEver_secretKey_you_want_to_Put_here",
    (err, authData) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.json({
          message: "post created",
          authData,
        });
      }
    }
  );
});

app.post("/api/login", (req, res) => {
  //Mock User
  const user = {
    id: 1,
    username: "brad",
    email: "brad@gmail.com",
  };

  jwt.sign(
    //IMPORTANT: This is your secret key. It should be a strong, randomly generated string and kept absolutely secret. Do not hardcode it directly in your code in a production environment. Store it in an environment variable.
    { user },
    "WhatEver_secretKey_you_want_to_Put_here",
    { expiresIn: "30s" },
    (err, token) => {
      res.json({
        token,
      });
    }
  );
});

// Format of Token
// Authorization:Beater<access_token>

//verify Token

function verifyToken(req, res, next) {
  //Get Auth header Value

  const bearerHeader = req.headers["authorization"];
  // Check bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from Array
    const bearerToken = bearer[1];
    //Set the token
    req.token = bearerToken;
    //Next middleware
    next();
  } else {
    //Forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => {
  console.log("Server running on Port 5000");
});
