
var ShelfView = Backbone.View.extend({
  el: $("#shelfs"),
  collection: new ShelfCollection(),
  events: {
    "click #shelf_regist_navi": "showRegistForm"
  },
  initialize: function() {
    this.collection.add(new Shelf({id:"1", name:"name1", description:"desc 1"}));
    this.collection.add(new Shelf({id:"2", name:"name2", description:"desc 2"}));
    this.collection.add(new Shelf({id:"3", name:"name3", description:"desc 3"}));
  },
  render: function() {
    this.collection.l
  },
  showRegistForm: function() {
    this.$("#regist_form").show();
  }
});
