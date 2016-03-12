toDoList.controller('ListController', ['$resource', function($resource) {

  var self = this;
  this.itemList = { "items": ["hello" ] };

  this.getItems = function() {
  };

  this.addItems = function(item) {
    console.log(item);
    self.itemList.items.push(item);
    console.log(self.itemList);
  };



}]);
