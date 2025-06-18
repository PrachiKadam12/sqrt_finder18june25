const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.get("/find", (req, res) => {
let num = req.query.number;
let n=parseFloat(num);
let ans="";
let log="";
if(n>=0)
{
let r=n**0.5;
ans = "square root = " + r.toFixed(2);
log = "num="+n+"dt = " + new Date().toString() + "\n";
fs.appendFile("result.txt", log, () => {});
res.json({"msg": ans});
}
else{
ans = "number shud be +ve";
log = "num="+n+"dt = " + new Date().toString() + "\n";
fs.appendFile("result.txt", log, () => {});
res.json({"msg": ans});

}
});
app.listen(9000, () => { console.log("ready to serve @ 9000"); } );
