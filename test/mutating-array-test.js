'use strict';

describe('MutatingArray', function() {
  var arr;

  beforeEach(function() {
    arr = Ember.MutatingArray.apply([
      { id: 1, foo: true },
      { id: 2, foo: false }
    ]);

    // Reject items with foo === false
    arr.get('filters').pushObject(function notFalse(item) {
      return item.foo !== false;
    });

    // Map items so that foo === false
    arr.get('maps').pushObject(function setFalse(item) {
      item.foo = false;
      return item;
    });
  });

  it('runs filters before maps', function() {
    expect(arr.toArray()).toEqual([{ id: 1, foo: false }]);
  });
});

