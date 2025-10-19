// index.js
const functions = require("firebase-functions");
const express = require("express");

const path = require("path");
const app = express();
const fs =require('fs');

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

const zairyou = require("./zairyou.json");

app.post("/zairyou",function (req,res){
    console.log("POST /zairyou にアクセスされました（messege from server)");
    const newName = req.body.updatedzairyou;
    zairyou.材料[0].name = newName;
    console.log("材料を更新（messege from server):",newName);
    res.send(zairyou);
});


//　Cloud Functions にエクスポート
exports.app = functions.https.onRequest(app);



