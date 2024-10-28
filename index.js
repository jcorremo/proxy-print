const http = require("http");
const host = '0.0.0.0';
const port = 8080;

var bodyParser = require('body-parser')

const requestListener = function (req, res) {

  console.log(`REQUEST HEADER:: ${JSON.stringify(req.headers)}`)
  console.log(`REQUEST URL:: ${req.url}`)
  console.log(`REQUEST METHOD:: ${req.method}`)
  
  req.on('data', chunk => {
    console.log(`REQUEST BODY:: ${chunk}`)
  })

  req.on('end', () => {
	console.log('No more data');  	
  	res.end();
  })

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


