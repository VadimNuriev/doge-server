// Подключение библиотек
const http = require("http");
const fs = require("fs");


// Конфигурация сервера
const host = 'localhost';
const port = 8000;


// Обработчик запроса
const requestListener = function (req, res) {
   switch (req.url) {
       // Обработчик динамического запроса
       case "/html":
           res.setHeader("Content-Type", "text/html");
           res.writeHead(200);
           res.end(`
               <html>
                   </head>
                       <title>Hello from web server!</title>
                   <head>
                   <body>
                       <div>
                           <h1>Hello world!</h1>
                           <h2>Current time: ${new Date().toLocaleString()}</h2>           </div>
                   </body>
               </html>
           `);
           break
       // Обработчик статического запроса
       case "/image":
           res.setHeader("Content-Type", "image/jpeg");
           res.writeHead(200);
           const image = fs.readFileSync(`${__dirname}/doge.jpeg`)
           res.end(image);
           break
       // Обработчик по умолчанию
       default:
           res.setHeader("Content-Type", "text/plain");
           res.end("Default content")
   }
};


// Создание и запуск сервера
const server = http.createServer(requestListener);
server.listen(port, host, () => {
   console.log(`Server is running on http://${host}:${port}`);
});
