/**
 * Id and title from year behavior.
 * @module behaviors/id_title_from_year/id_title_from_year
 */

import { uniqueId } from '@robgietema/nick/src/helpers/utils/utils';

/**
 * Id and title from year behavior.
 * @constant id_title_from_year
 */
export const id_title_from_year = {
  /**
   * Set id
   * @method getId
   * @param {string} id Provided id (can be empty)
   * @param {Array} blacklist Blacklist ids
   * @returns {string} Id
   */
  setId: function (id, blacklist) {
    this.id = uniqueId(`schedule-${this.json.year}`, blacklist);
  },

  /**
   * Get title
   * @method getTitle
   * @returns {string} Title
   */
  getTitle: function () {
    return `Schedule ${this.json.year}`;
  },
};
