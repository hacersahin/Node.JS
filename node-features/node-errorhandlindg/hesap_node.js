const http = require("https");
const url = require("url");
const fs = require("fs");

function sayiBol(bolen, bolunen) {
  if (bolen == 0) {
    throw new Error("Sifirla bolemezsin");
  }
  return bolunen / bolen;
}

const server = http.createServer((res, req) => {
  const pathname = url.parse(req.url, true);

  if (req.method === "GET" && pathname === "/") {
    fs.readFile("./hesap.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end("Server tarafında bir hata oluştu");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.method == "POST" && pathname == "/bol") {
    let body = ""; // bu body datayı tutuyor. htmldeki body değil!!

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const { bolunen, bolen } = JSON.parse(body);
      try {
        const sonuc = sayiBol(parseFloat(bolen), parseFloat(bolunen));
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ sonuc }));
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }else {
    res.writeHead(404, { "Content-Type":"text/plain" });
    res.end('Bulunamadı');
  }
});
server.listen(3000, ()=> {
  console.log("server çalışıyor. port 3000");
});
