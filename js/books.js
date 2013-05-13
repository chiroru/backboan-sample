jQuery(document).ready(function() {

  var BooksView = Backbone.View.extend({
    el: $("#bookapp"),
    list: new BookList(),
    events: {
      "click #regist": "regist",
      "click #add": "add"
    }, 
    initialize: function() {
      this.list.add(new Book({name:"name1", volume:"1"}));
      this.list.add(new Book({name:"name2", volume:"1"}));
      this.list.add(new Book({name:"name3", volume:"1"}));
      //this.list = [{name:'name1', volume:'1'}, {name:'name2', volume:'1'}, {name:'name3', volume:'1'}];
      this.render();

      this.listenTo(this.list, 'add', this.render);
    },
    render: function() {
      //jQuery(this.el).html(_.template($('#list-template').html(), {name: 'foo', text: 'bar'}));
      //jQuery(this.el).html(_.template($('#list-template').html(), {list: this.list}));
      console.log(this.list.length);
      _.each(this.list.models, function(b) {
        console.log(b);
      });
      this.$("#book_list").html(_.template($('#list-template').html(), {list: this.list}));
    },
    regist: function() {
      this.$("#regist_form").show();
    },
    add: function() {
      var b = new Book({name:$('#name').val(), volume:$('#volume').val()});
      this.list.add(b);
    }
  });

  var b = new BooksView();
});
