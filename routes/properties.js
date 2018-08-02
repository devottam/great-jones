const Property = require('../models/property');

async function list(req, res) {
  try {
    const result = await Property.fetch(req.query);
    res.send({
      items: result.data.value,
      page: req.query.page || 1
    });
  } catch (e) {
    res.status(500).send('Something went wrong!');
  }
}

module.exports = {
  list
};
