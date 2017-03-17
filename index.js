const express = require(`express`);
const healthcare = require(`./api/healthcareClinics`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Hello, world!!`);
});

app.get(`/api/v1/healthcare`, (req, res) => {
  healthcare().then(msgs => res.send(msgs));
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);
