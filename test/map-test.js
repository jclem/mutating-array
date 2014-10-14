'use strict';

describe('maps', function() {
  var arr;

  beforeEach(function() {
    arr = Ember.MutatingArray.apply([{ foo: true }, { foo: false, bar: 'baz' }]);

    arr.get('maps').pushObject(function fooBar(item) {
      item.foo = 'bar';
      return item;
    });
  });

  it('immediately applies new maps', function() {
    expect(arr.toArray()).toEqual([
      { foo: 'bar' },
      { foo: 'bar', bar: 'baz' }
    ]);
  });

  it('map new objects pushed', function() {
    arr.pushObjects([{ foo: true }, { foo: false }]);
    expect(arr.toArray()).toEqual([
      { foo: 'bar' },
      { foo: 'bar', bar: 'baz' },
      { foo: 'bar' },
      { foo: 'bar' }
    ]);
  });
});

