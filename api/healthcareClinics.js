const axios = require(`axios`);
const get = require(`lodash/fp/get`);
const compact = require(`lodash/fp/compact`);
const map = require(`lodash/fp/map`);

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY || `keyNJRjM1plBmeRh4`;
module.exports = () => {
  return axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Health?api_key=${AIRTABLE_API_KEY}`)
    .then(get(`data.records`))
    .then(map(toFBMessage))
    .then(compact)
    .then(JSON.stringify);

  function toFBMessage({
    fields: {
      Name: name,
      Address: address,
      Phone: phone,
      Borough: borough,
    },
  }) {
    if (borough === `Brooklyn`) {
      return {
        text: `${name} at ${address} can be reached at ${phone}`,
      };
    }

    return undefined;
  }
};
