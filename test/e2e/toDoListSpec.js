describe('my to do list', function(){

  it('can add a new item to the list', function(){
    browser.get('http://localhost:8080');
    element(by.model('newItem')).sendKeys('shine shoes');
    element(by.className('btn')).click();
    expect(element(by.binding('item.task')).getText()).toEqual('shine shoes');
  });

  it('can remove an item from the list', function(){

  });

  it('can remove an item from the list', function(){

  });

  it('can mark an item as done', function(){

  });

  it("can filter items by 'completed'", function(){

  });

  it("can filter items by 'active'", function(){

  });
});
