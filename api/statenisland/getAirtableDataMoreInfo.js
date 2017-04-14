const fetchAirtableData = require(`./fetchAirtableData`);

module.exports = endpoint => () => {
  return fetchAirtableData({ endpoint, toFBMessage });

  function toFBMessage({
    fields: {
      Name: name,
      Hours: hours,
      Services: services,
      Borough: borough,
    },
  }) {
    if (borough === `Staten Island`) {
      return {
        text: `${name}'s hours are listed as ${hours} and can help with the following services ${services}`,
      };
    }

    return undefined;
  }
};
