const axios = require('axios')
const redis = require('../redis')

const dataURL = 'https://noho.search.windows.net/indexes/records-index/docs?api-version=2017-11-11&search=*'
const apiKey = '39E2DAE5DEA8B388ED0D96FE0C7572CC'
const defaultLimit = 10

function Property() {}

Property.all = function() {}

function skipAndLimitFromPage(page) {
  const options = {
    limit: defaultLimit
  }

  if (page === 0 || page === 1 || !page) {
    options.skip = 0
  } else {
    options.skip = page * defaultLimit
  }

  return options
}

/**
 *  eg: {
 *    page:1,
 *    score:1,
 *    fields: a,b,c
 * }
 * @param {Object} params -
 */
Property.fetch = async function(params) {
  try {
    const options = skipAndLimitFromPage(params.page)
    const newURL = `${dataURL}&$skip=${options.skip}&$top=${options.limit}&$select=${params.fields || '*'}`
    const result = await axios({
      url: newURL,
      method: 'get',
      headers: {
        'api-key': apiKey
      }
    })

    return result
  } catch (e) {
    throw e
  }
}

module.exports = Property
