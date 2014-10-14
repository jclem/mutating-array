(function() {
  'use strict';

  Ember.MutatingArray = Ember.Mixin.create({
    filters: function() {
      return [];
    }.property(),

    maps: function() {
      return [];
    }.property(),

    replace: function(idx, amt, objects) {
      var filters = this.get('filters');
      var maps    = this.get('maps');

      for (var i = 0; i < filters.length; i++) {
        objects = objects.filter(filters[i]);
      }

      for (var i = 0; i < maps.length; i++) {
        objects = objects.map(maps[i]);
      }

      return this._super(idx, amt, objects);
    },

    runTransforms: function() {
      return this.replace(0, this.length, this);
    }.observes('filters.[]', 'maps.[]'),
  });
}());
