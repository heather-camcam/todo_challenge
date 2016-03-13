toDoList.controller('ListController', ['$resource', function($resource) {

  var self = this;
  this.itemList = { "items": [
                  
                    ]
                  };


  this.filters = [
    {name: 'Active', filterExp: {completed: false}},
    {name: 'Completed', filterExp: {completed: true}}
  ];

  this.setFilter = function(filter) {
    self.selectedFilter = filter;
  };

  this.addItems = function(task) {
    var item = {'task':task, 'completed':false}
    self.itemList.items.push(item);
  };

  this.removeItem = function(item) {
    var index = self.itemList.items.indexOf(item);
    self.itemList.items.splice(index, 1)

  };

  this.toggleCompleted = function(item) {
    if (item.completed === false) {
      item.completed = true;
    }
    else {
      item.completed = false;
    }
  };



}]);
