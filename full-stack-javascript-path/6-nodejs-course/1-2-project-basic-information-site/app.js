// const express=require('express');
import express from "express";
const app = express();
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

app.get("/", (req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    res.end();
    if (err) {
      res.write("Error Matey");
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", function (err, data) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("contact-me.html", function (err, data) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.use((req, res) => {
  fs.readFile("404.html", function (err, data) {
    res.writeHead(400, { "content-type": "text/html" });
    res.write(data);
    return res.end();
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Basic Informational site started");
});
