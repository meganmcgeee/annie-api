const fetchAirtableData_Violet = require(`./fetchAirtableData_Violet`);


module.exports = endpoint => () => {
  return fetchAirtableData_Violet({ endpoint, toFBMessage });

  function toFBMessage({
    fields: {
      drugName,
      kindOfDrug,
      // isCombination: isCombination,
      // isProgestin: isProgestin,
      // sideEffects: sideEffects,
      conditionsItHelps,
      // conditionsItWorsens: conditionsItWorsens

    },
  }) {
    if (kindOfDrug === `Birth Control Pill`) {
      return {
        text: `${drugName} is a birth control pill that can help the following conditions: ${conditionsItHelps}.`,
      };
    }

    return undefined;
  }
};
