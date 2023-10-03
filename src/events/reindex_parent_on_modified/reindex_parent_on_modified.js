/**
 * Reindex parent on modified
 * @module events/reindex_parent_on_modified
 */

const reindex_parent_on_modified = {
  onAfterModified: async (context, trx) => {
    if (context.type !== 'Talk') return;

    // Fetch parent
    if (!context._parent) {
      await context.fetchRelated('_parent', trx);
    }

    // Reindex parent
    await context._parent.reindex(trx);
  },

  onAfterAdd: async (context, trx) => {
    if (context.type !== 'Talk') return;

    // Fetch parent
    if (!context._parent) {
      await context.fetchRelated('_parent', trx);
    }

    // Reindex parent
    await context._parent.reindex(trx);
  },
};

export default reindex_parent_on_modified;
