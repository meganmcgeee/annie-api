const express = require(`express`);
const food = require(`./api/foodPantries`);
const healthcare = require(`./api/healthcareClinics`);
const healthcareClinicsMore = require(`./api/healthcareClinicsMore`);
const reentry = require(`./api/reentry`);
const reentry = require(`./api/reentryMoreInfo`);
const shelter = require(`./api/affordableHousing`);
const youth = require(`./api/youthCenters`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Hello, world!!`);
});

app.get(`/api/v1/food`, (req, res) => {
  food().then(msgs => res.send(msgs));
});

app.get(`/api/v1/healthcare`, (req, res) => {
  healthcare().then(msgs => res.send(msgs));
});

app.get(`/api/v1/healthcareClinicsMore`, (req, res) => {
  healthcareClinicsMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/reentry`, (req, res) => {
  reentry().then(msgs => res.send(msgs));
});

app.get(`/api/v1/reentryMoreInfo`, (req, res) => {
  reentryMoreInfo().then(msgs => res.send(msgs));
});

app.get(`/api/v1/shelter`, (req, res) => {
  shelter().then(msgs => res.send(msgs));
});

app.get(`/api/v1/youth`, (req, res) => {
  youth().then(msgs => res.send(msgs));
});

// app.get(`/api/v1/childcare`, (req, res) => {
//   childcare().then(msgs => res.send(msgs));
// });

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);
