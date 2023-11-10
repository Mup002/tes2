const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/getdata', (req, res) => {
  const uid = req.body.uid;
  console.log(`Received UID: ${uid}`);
  res.sendStatus(200); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
