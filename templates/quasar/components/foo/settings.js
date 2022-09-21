/**
 * This object lets you overwrite default settigns for the List components's
 * pagination, without the need to edit the .vue file.
 */
export const listPagination = {
  /* number of rows displayed on each page */
  rowsPerPage: 20,

  /* default sorting options, eg descending by name. */
  // sortBy: "name",
  // descending: true
}

/**
 * Overwrite settings for the virtualScroll variant of the List view.
 */
export const listVirtualScroll = {
  /* Whether or not virtualScroll is enabled. If false, the table will display paginated */
  enabled: false,

  /* Number of rows to be loaded when the user scrolls to the end */
  rowsPerPage: 30,

  /* A table using virtualScroll needs a fixed height. You can set it here. */
  height: "500px",
}

/**
 * To overwrite the component used for a row in the list table, export it here instead of null.
 * Don't remove the export if no override is used - the list component compates this to *null*.
 */
// import MyCustomItem from "past/to/Component.vue"
// export const BodyItem = MyCustomItem
export const BodyItem = null
