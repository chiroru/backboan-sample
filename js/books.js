jQuery(document).ready(function() {

  var BooksView = Backbone.View.extend({
    el: $("#bookapp"),
    events: {
      "click #regist": "regist"
    }, 
    initialize: function() {
      this.list = [{name:'name1', text:'text1'}, {name:'name2', text:'test2'}, {name:'name3', text:'test3'}];
      this.render();
    },
    render: function() {
      //jQuery(this.el).html(_.template($('#list-template').html(), {name: 'foo', text: 'bar'}));
      //jQuery(this.el).html(_.template($('#list-template').html(), {list: this.list}));
      this.$("#book_list").html(_.template($('#list-template').html(), {list: this.list}));
    },
    regist: function() {
      this.$("#regist_form").show();
      this.list.push({name:'name4', text:'test4'});
    }
  });

  var b = new BooksView();
});
