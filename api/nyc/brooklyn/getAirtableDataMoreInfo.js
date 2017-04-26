const fetchAirtableData = require(`./fetchAirtableData`);

module.exports = endpoint => () => {
  return fetchAirtableData({ endpoint, toFBMessage });

  function toFBMessage({
    fields: {
      Name: name,
      Hours: hours,
      Description: description,
      Borough: borough,
    },
  }) {
    if (borough === `Brooklyn`) {
      return {
        text: `${name}'s hours are listed as ${hours} and can help with the following services ${description}`,
      };
    }

    return undefined;
  }
};
