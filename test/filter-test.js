'use strict';

describe('filters', function() {
  var arr;

  beforeEach(function() {
    arr = Ember.MutatingArray.apply([{ foo: true }, { foo: false }]);

    arr.get('filters').pushObject(function onlyFoo(item) {
      return item.foo === true;
    });
  });

  it('immediately applies new filters', function() {
    expect(arr.toArray()).toEqual([{ foo: true }]);
  });

  it('filters new objects pushed', function() {
    arr.pushObjects([{ foo: true }, { foo: false }]);
    expect(arr.toArray()).toEqual([{ foo: true }, { foo: true }]);
  });
});
