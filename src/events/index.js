/**
 * Point of contact for events.
 * @module events
 * @example import events from './events';
 */

import events from '@robgietema/nick/src/events';

import reindex_parent_on_modified from './reindex_parent_on_modified/reindex_parent_on_modified';

events.register(reindex_parent_on_modified);

export default events;
