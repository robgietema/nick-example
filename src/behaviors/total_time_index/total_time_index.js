/**
 * Total time index behavior.
 * @module behaviors/total_time_index/total_time_index
 */

import { map } from 'lodash';

/**
 * Total time index behavior.
 * @constant total_time_index
 */
export const total_time_index = {
  /**
   * Get total time
   * @method totalTime
   * @param {Object} trx Transaction object.
   * @returns {Number} totalTime
   */
  totalTime: async function (trx) {
    let total = 0;
    await this.fetchRelated('_children', trx);

    await Promise.all(
      map(this._children, async (child) => {
        if (child.json.length === 'Short') {
          total += 30;
        } else {
          total += 45;
        }
      }),
    );

    return total;
  },
};
