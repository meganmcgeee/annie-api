const axios = require(`axios`);
const get = require(`lodash/fp/get`);
const compact = require(`lodash/fp/compact`);
const map = require(`lodash/fp/map`);

const AIRTABLE_API_KEY_VIOLET = process.env.AIRTABLE_API_KEY_VIOLET || `keyhxGoAKpWTeZbHq`;
module.exports = ({ endpoint, toFBMessage }) =>
  axios.get(`https://airtable.com/tblVhoJPDXAXaNc0H/viwaQSrz6vWTRy9hP${endpoint}?api_key=${AIRTABLE_API_KEY_VIOLET}`)
      .then(get(`data.records`))
      .then(map(toFBMessage))
      .then(compact)
      .then(JSON.stringify);
