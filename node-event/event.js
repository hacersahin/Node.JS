var events = require("events");
var yayici = new events.EventEmitter();

var olayCozucu = function () {
  console.log("Bir kedi gördüm sanki");
}

yayici.on("miyav", olayCozucu);
yayici.emit("miyav");
