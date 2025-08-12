
const http = require("http");
const host = '0.0.0.0';
const port = 8080;
const aplazoMocks = require('./aplazo/aplazo_mocks');

const requestListener = function (req, res) {
  console.log(`REQUEST HEADER:: ${JSON.stringify(req.headers)}`);
  console.log(`REQUEST URL:: ${req.url}`);
  console.log(`REQUEST METHOD:: ${req.method}`);

  let body = '';
  req.on('data', chunk => {
    body += chunk;
    console.log(`REQUEST BODY:: ${chunk}`);
  });

  req.on('end', () => {
    console.log('No more data');
    if (req.url.startsWith('/aplazo')) {
      req.path = req.url.replace('/aplazo', '');
      return aplazoMocks(req, res);
    }
    res.end();
  });
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});


