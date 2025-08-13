const crypto = require('crypto');

function randomString() {
  return crypto.randomUUID();
}

module.exports = function aplazoMocks(req, res) {
  if (req.method === 'POST' && req.path === '/wm/callback/customer-offer/initiate') {
    const response = {
      creditLineId: randomString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(response));
  }

  if (req.method === 'POST' && req.path === '/wm/callback/customer-offer/reject') {
    const response = {
      lineRejectedCode: randomString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(response));
  }

  res.writeHead(200);
  return res.end();
};
