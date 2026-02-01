const figlet = require('figlet');

figlet("Hi , I am chandrakant , I love Node.js !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});