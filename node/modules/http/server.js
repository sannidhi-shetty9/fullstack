const http = require("http");

// create a http server
const server = http.createServer((req, res) => {
// - The server callback function receives `req` (request) and `res` (response) objects as parameters. You can access request headers, URL, and data, and send a response back to the client.

    // Sets the response status code and headers.
  res.writeHead(200, { "Content-Type": "text/plain" });
//   Writes data to the response.
  res.write("Hi...")
//   Ends the response and sends it to the client.
  res.end("Hello, World!\n");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
