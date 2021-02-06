const http = require('http');
const hostname = 'localhost';
const port = 3000;

const helpText = `
<!DOCTYPE html>
<html>
<head>
<title>Your NodeJS Droplet</title>
<style>
    body {
        width: 55em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
        background: #AAAAAA;
    }
    div {
      padding: 30px;
      background: #FFFFFF;
      margin: 30px;
      border-radius: 5px;
      border: 1px solid #888888;
    }
    code {
      font-size: 16px;
      background: #DDDDDD;
    }
</style>
</head>
<body>
  <div>
    <h1>We did it!</h1>
    <p>next step... SSL cert
  </div>
</body>
</html>
`

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(helpText);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
