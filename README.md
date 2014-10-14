# Ember.MutatingArray

`Ember.MutatingArray` is an array mixin for Ember apps. It overrides the
[`replace`][replace] method of an [Ember.MutableArray][mutable-array] so that
a series of filters, and then a series of maps, are performed on the array
before any objects are added to it.

## Install

`bower install --save mutating-array`

## Usage

```javascript
// Create an array
var arr = [
  { firstName: 'Jonathan', lastName: 'Clem' },
  { firstName: 'George', lastName: 'Jones' }
];

// Turn it into a MutatingArray
arr = Ember.MutatingArray.apply(arr);

// Add some filters
arr.get('filters').pushObject(function onlyJoneses(item) {
  return item.lastName === 'Jones';
});

// Add some maps
arr.get('maps').pushObject(function nickNames(item) {
  if (item.firstName === 'George') {
    item.nickname = 'The Possum';
  }

  return item;
});

arr.toArray(); // [{ firstName: 'George', lastName: 'Jones', nickname: 'The Possum' }];

arr.pushObject({ firstName: 'George', lastName: 'Bush' });

arr.toArray(); // [{ firstName: 'George', lastName: 'Jones', nickname: 'The Possum' }];

arr.pushObject({ firstName: 'Chuck', lastName: 'Jones' });

arr.toArray(); // [
               //   { firstName: 'George', lastName: 'Jones', nickname: 'The Possum' },
               //   { firstName: 'Chuck', lastName: 'Jones' }
               // ];
```

[replace]: http://emberjs.com/api/classes/Ember.MutableArray.html#method_replace
[mutable-array]: http://emberjs.com/api/classes/Ember.MutableArray.html
