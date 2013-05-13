test('モデルとコレクションの関係', function() {
  var m1 = new Book({name:"name1", volume:"1"});
  var m2 = new Book({name:"name2", volume:"1"});
  var m3 = new Book({name:"name3", volume:"1"});
  var list = new BookList();
  list.add(m1);
  list.add(m2);
  list.add(m3);

  equal(3, list.length);

  equal(list, m1.collection);
});

