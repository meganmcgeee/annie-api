const fetchAirtableData = require(`./fetchAirtableData`);


module.exports = endpoint => () => {
  return fetchAirtableData({ endpoint, toFBMessage });

  function toFBMessage({
    fields: {
      Name: name,
      Address: address,
      Phone: phone,
      isComplete: iscomplete,
    },
  }) {
    if (iscomplete === `Yes`) {
      return {
        text: `${name} at ${address} can be reached at ${phone}`,
      };
    }

    return undefined;
  }
};
