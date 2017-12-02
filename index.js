const express = require(`express`);

// New York City

// Brooklyn
const foodBk = require(`./api/nyc/brooklyn/food/foodPantries`);
const foodMoreBk = require(`./api/nyc/brooklyn/food/foodMore`);
const healthcareBk = require(`./api/nyc/brooklyn/healthcare/healthcareClinics`);
const healthcareClinicsMoreBk = require(`./api/nyc/brooklyn/healthcare/healthcareClinicsMore`);
const reentryBk = require(`./api/nyc/brooklyn/reentry/reentry`);
const reentryMoreBk = require(`./api/nyc/brooklyn/reentry/reentryMore`);
const shelterBk = require(`./api/nyc/brooklyn/housing/affordableHousing`);
const shelterMoreBk = require(`./api/nyc/brooklyn/housing/affordableHousingMore`);
// const youthBk = require(`./api/nyc/brooklyn/youthcenters/youthCenters`);
// const youthMoreBk = require(`./api/nyc/brooklyn/youthcenters/youthCentersMore`);

// Bronx
const foodBx = require(`./api/nyc/bronx/foodPantries`);
const foodMoreBx = require(`./api/nyc/bronx/foodPantriesMore`);
const healthcareBx = require(`./api/nyc/bronx/healthcareClinics`);
const healthcareClinicsMoreBx = require(`./api/nyc/bronx/healthcareClinicsMore`);
const reentryBx = require(`./api/nyc/bronx/reentry`);
const reentryMoreBx = require(`./api/nyc/bronx/reentryMore`);
const shelterBx = require(`./api/nyc/bronx/affordableHousing`);
const shelterMoreBx = require(`./api/nyc/bronx/affordableHousingMore`);
const youthBx = require(`./api/nyc/bronx/youthCenters`);
const youthMoreBx = require(`./api/nyc/bronx/youthCentersMore`);


// // Manhattan
const foodMn = require(`./api/nyc/manhattan/foodPantries`);
const foodMoreMn = require(`./api/nyc/manhattan/foodPantriesMore`);
const healthcareMn = require(`./api/nyc/manhattan/healthcareClinics`);
const healthcareClinicsMoreMn = require(`./api/nyc/manhattan/healthcareClinicsMore`);
const reentryMn = require(`./api/nyc/manhattan/reentry`);
const reentryMoreMn = require(`./api/nyc/manhattan/reentryMore`);
const shelterMn = require(`./api/nyc/manhattan/affordableHousing`);
const shelterMoreMn = require(`./api/nyc/manhattan/affordableHousingMore`);
const youthMn = require(`./api/nyc/manhattan/youthCenters`);
const youthMoreMn = require(`./api/nyc/manhattan/youthCentersMore`);

// Staten Island
const food = require(`./api/nyc/statenisland/foodPantries`);
const foodMore = require(`./api/nyc/statenisland/foodPantriesMore`);
const healthcare = require(`./api/nyc/statenisland/healthcareClinics`);
const healthcareClinicsMore = require(`./api/nyc/statenisland/healthcareClinicsMore`);
const reentry = require(`./api/nyc/statenisland/reentry`);
const reentryMore = require(`./api/nyc/statenisland/reentryMore`);
const shelter = require(`./api/nyc/statenisland/affordableHousing`);
const shelterMore = require(`./api/nyc/statenisland/affordableHousingMore`);
const youth = require(`./api/nyc/statenisland/youthCenters`);
const youthMore = require(`./api/nyc/statenisland/youthCentersMore`);

// // Queens
const food = require(`./api/nyc/queens/foodPantries`);
const foodMore = require(`./api/nyc/queens/foodPantriesMore`);
const healthcare = require(`./api/nyc/queens/healthcareClinics`);
const healthcareClinicsMore = require(`./api/nyc/queens/healthcareClinicsMore`);
const reentry = require(`./api/nyc/queens/reentry`);
const reentryMore = require(`./api/nyc/queens/reentryMore`);
const shelter = require(`./api/nyc/queens/affordableHousing`);
const shelterMore = require(`./api/nyc/queens/affordableHousingMore`);
const youth = require(`./api/nyc/queens/youthCenters`);
const youthMore = require(`./api/nyc/queens/youthCentersMore`);

const app = express();

app.get(`/`, (req, res) => {
  res.send(`Welcome to Annie.`);
});
//  Bronx

app.get(`/api/v1/nyc/bronx/food`, (req, res) => {
  food().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/foodMore`, (req, res) => {
  foodMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/healthcare`, (req, res) => {
  healthcare().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/healthcareClinicsMore`, (req, res) => {
  healthcareClinicsMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/reentry`, (req, res) => {
  reentry().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/reentryMore`, (req, res) => {
  reentryMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/shelter`, (req, res) => {
  shelter().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/shelterMore`, (req, res) => {
  shelterMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/youth`, (req, res) => {
  youth().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/bronx/childcare`, (req, res) => {
  childcare().then(msgs => res.send(msgs));
});

// Broooklyn

app.get(`/api/v1/nyc/brooklyn/food`, (req, res) => {
  foodBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/foodMore`, (req, res) => {
  foodMoreBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/healthcare`, (req, res) => {
  healthcareBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/healthcareClinicsMore`, (req, res) => {
  healthcareClinicsMoreBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/reentry`, (req, res) => {
  reentryBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/reentryMore`, (req, res) => {
  reentryMoreBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/shelter`, (req, res) => {
  shelterBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/shelterMore`, (req, res) => {
  shelterMoreBk().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/brooklyn/holiday`, (req, res) => {
  shelterMoreBk().then(msgs => res.send(msgs));
});
// Manhattan

app.get(`/api/v1/nyc/manhattan/food`, (req, res) => {
  food().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/foodMore`, (req, res) => {
  foodMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/healthcare`, (req, res) => {
  healthcare().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/healthcareClinicsMore`, (req, res) => {
  healthcareClinicsMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/reentry`, (req, res) => {
  reentry().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/reentryMore`, (req, res) => {
  reentryMore().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/shelter`, (req, res) => {
  shelter().then(msgs => res.send(msgs));
});

app.get(`/api/v1/nyc/manhattan/shelterMore`, (req, res) => {
  shelterMore().then(msgs => res.send(msgs));
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);

