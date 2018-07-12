import OlioS3 from '../helpers/OlioS3';

let instance;

/**
 * Wrapper around the OLIO article collection
 */
class Articles {
  /**
   * Fetches the article JSON collection
   */
  load() {
    return OlioS3
      .connect()
      .articles()
      .then((articles) => {
        this.articles = articles;
      });
  }

  /**
   * Returns the articles represented by JSON objects
   * @return {object}
   */
  getAll() {
    return this.articles;
  }
}

export default {
  /**
   * returns singleton instance of the Article
   * @return {object}
   */
  singleton() {
    if (!instance) instance = new Articles();
    return instance;
  } 
};
