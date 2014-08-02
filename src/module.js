/**
 * @ngdoc module
 * @name hg.scrollStop
 *
 * @description
 * Custom scrollstop and scrollstart events that can be used from services or
 * directives. Please see usage documentation within the events or directive
 * files.
 */
angular.module('hg.scrollStop', [
  'hg.scrollStop.utils',
  'hg.scrollStop.events',
  'hg.scrollStop.directives'
]);
