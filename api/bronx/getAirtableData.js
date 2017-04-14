const fetchAirtableData = require(`./fetchAirtableData`);


module.exports = endpoint => () => {
  return fetchAirtableData({ endpoint, toFBMessage });

  function toFBMessage({
    fields: {
      Name: name,
      Address: address,
      Phone: phone,
      Borough: borough,
    },
  }) {
    if (borough === `Bronx`) {
      return {
        text: `${name} at ${address} can be reached at ${phone}`,
      };
    }

    return undefined;
  }
};
