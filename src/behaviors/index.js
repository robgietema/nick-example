/**
 * Point of contact for behaviors.
 * @module behaviors
 */

import { author_index } from './author_index/author_index';
import { id_title_from_year } from './id_title_from_year/id_title_from_year';
import { total_time_index } from './total_time_index/total_time_index';

const behaviors = {
  author_index,
  id_title_from_year,
  total_time_index,
};

export default behaviors;
