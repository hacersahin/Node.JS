const mysql = require("mysql");

const degisken = process.env.DISARDAN_GELEN;

// console.log("Disardan gelen Environment degiskeni: " +degisken);

// console.log(process.env);

const host = process.env.HOST;
const user = process.env.USER;
const pass = process.env.PASS;

const connections = mysql.createConnection({
  host: host,
  user: user,
  pass: pass,
});
