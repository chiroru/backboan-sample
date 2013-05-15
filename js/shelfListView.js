
var ShelfListView = Backbone.View.extend({
  tagName: "tr",
  template: _.template($("#shelf-template").html()),
  initialize: function() {
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
