/**
 * Author index behavior.
 * @module behaviors/author_index/author_index
 */

/**
 * Author index behavior.
 * @constant author_index
 */
export const author_index = {
  /**
   * Get author
   * @method author
   * @param {Object} trx Transaction object.
   * @returns {String} author
   */
  author: async function (trx) {
    return `${this.json.firstname} ${this.json.lastname}`;
  },
};
