const express = require(`express`);

// New York City

// Brooklyn
const food = require(`./api/brookyn/foodPantries`);
const healthcare = require(`./api/brookyn/healthcareClinics`);
const healthcareClinicsMore = require(`./api/brookyn/fhealthcareClinicsMore`);
const reentry = require(`./api//brookyn/reentry`);
const reentryMore = require(`./api//brookyn/reentryMore`);
const shelter = require(`./api//brookyn/affordableHousing`);
const youth = require(`./api/brookyn/youthCenters`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Hello, world!!`);
});

app.get(`/api/v1/food`, (req, res) => {
  food().then(msgs => res.send(msgs));
});

app.get(`/api/v1/foodMore`, (req, res) => {
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

app.get(`/api/v1/reentryMore`, (req, res) => {
  reentryMore().then(msgs => res.send(msgs));
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
