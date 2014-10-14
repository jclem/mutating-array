(function() {
  'use strict';

  Ember.MutatingArray = Ember.Mixin.create({
    filters: function() {
      return [];
    }.property(),

    replace: function(idx, amt, objects) {
      var filters = this.get('filters');

      for (var i = 0; i < filters.length; i++) {
        objects = objects.filter(filters[i]);
      }

      return this._super(idx, amt, objects);
    },

    runFilters: function() {
      return this.replace(0, this.length, this);
    }.observes('filters.[]')
  });
}());
