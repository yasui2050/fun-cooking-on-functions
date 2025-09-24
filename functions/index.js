// index.js
const functions = require("firebase-functions");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/",function (req, res) {
 res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/youbou",function (req, res) {
  const title =req.body.title;
  res.send(`
    <h1>お客様の要望</h1>
    <p>${title}</p>
    <a href="/">戻る</a>
    `);
  console.log("req.bodyの中身",req.body);
});

//　Cloud Functions にエクスポート
exports.app = functions.https.onRequest(app);



