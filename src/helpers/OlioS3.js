import Client from './Client';

/**
 * Client object that represent a simplex connection to olio endpoint
 * @param {string} url - URL to the articles
 */
function OlioS3(url) {

  const client = Client.connect({ endpoint: url });

  return {
    articles: function() {
      return client.get('developer/articles.json');
    },
  }
}

/**
 * Exposing the API to the shared context 
 * @type {object}
 */
export default {
  /**
   * Returns an instance of a OlioS3 connected to the given endpoint
   * @param {string} endpoint Endpoint of the Gift service
   * @return {object} Instance of the OlioS3 
   */
  connect() {
    const endpoint = 'https://s3-eu-west-1.amazonaws.com/olio-staging-images';
    return OlioS3(endpoint);
  }
};