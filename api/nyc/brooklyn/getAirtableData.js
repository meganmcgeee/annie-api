const fetchAirtableData = require(`./fetchAirtableData`);


module.exports = endpoint => () => {
  return fetchAirtableData({ endpoint, toFBMessage });

  function toFBMessage({
    fields: {
      Name: name,
      Address: address,
      Phone: phone,
      isComplete: iscomplete,
      imgLink: imglink,
      Borough: borough,
      Description: description,
    },
  }) {
    if (iscomplete === `Yes` && borough === `Brooklyn`) {
      return {
        attachment: {
          type: `template`,
          payload: {
            template_type: `generic`,
            elements: [
              {
                title: name,
                image_url: imglink,
                subtitle: description,
                buttons: [
                  {
                    type: `web_url`,
                    url: `https://google.com/maps/dir/{{latitude}}+{{longitude}}/street,+city,state+zip`,
                    title: `How to Get There.`,
                  },
                ],
              },
            ],
          },
        },
      };
    }

    return undefined;
  }
};
