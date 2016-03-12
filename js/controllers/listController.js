toDoList.controller('ListController', ['$resource', function($resource) {

  var self = this;
  this.itemList = { "items": [ ] };

  this.getItems = function() {
  };

  this.addItems = function(item) {
    console.log(item);
    self.itemList.items.push(item);
    console.log(self.itemList);
  };

  this.removeItem = function(item) {
    var index = self.itemList.items.indexOf(item);
    console.log(index);
    self.itemList.items.splice(index, 1)

  };



}]);
