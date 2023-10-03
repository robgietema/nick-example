/**
 * Talk levels vocabulary.
 * @module vocabularies/talk-levels/talk-levels
 */

import { objectToVocabulary } from '@robgietema/nick/src/helpers/utils/utils';

/**
 * Returns the talk levels vocabulary.
 * @method talkLevels
 * @returns {Array} Array of terms.
 */
export async function talkLevels(req, trx) {
  // Return terms
  return objectToVocabulary({
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
  });
}
