var Book = Backbone.Model.extend({
  defaults: function() {
    return {
      name:"",
      volume: "1"
    }
  },
  initialize: function(attrs, options) {
    if (!this.get("name")) {
      this.set({"name": this.defaults().name});
    };
    if (!this.get("volume")) {
      this.set({"volume": this.defaults().volume});
    };
  },
  validate: function(attrs) {
  },
});

var BookList = Backbone.Collection.extend({
  model: Book
});
