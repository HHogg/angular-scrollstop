/**
 * @ngdoc module
 * @name hg.scrollStop.directives
 *
 * @description
 * Module containing the directives for the scrollstart and stop functionality.
 */
angular.module('hg.scrollStop.directives', [
  'hg.scrollStop.events'
])


  /**
   * @ngdoc directive
   * @name hg.scrollStop.directives:hgScrollstart
   *
   * @requires $parse
   * @requires hg.scrollStop.events:hgScrollEvent
   *
   * @description
   * Directive that attaches a scrollstart event to the given element.
   *
   * ### Usage
   *
   * By providing a function to the attribute value, similar to ng-click,
   * this uses a function within the scope of the directive as callback.
   *
   * ```html
   * <div hg-scrollstart="foo()"></div>
   * ```
   *
   * Not providing a function simply broadcasts the scrollstart event down
   * the scope of the element.
   */
  .directive('hgScrollstart', function($parse, hgScrollEvent) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        var fn = $parse(attributes.hgScrollstart);


        hgScrollEvent.scrollstart(element, function(event) {
          fn(scope, {
            event: event
          });
        });
      }
    };
  })


  /**
   * @ngdoc directive
   * @name hg.scrollStop.directives:hgScrollstop
   *
   * @requires $parse
   * @requires hg.scrollStop.events:hgScrollEvent
   *
   * @description
   * Directive that attaches a scrollstop event to the given element.
   *
   * ### Usage
   *
   * By providing a function to the attribute value, similar to ng-click,
   * this uses a function within the scope of the directive as callback.
   *
   * ```html
   * <div hg-scrollstop="foo()"></div>
   * ```
   *
   * Not providing a function simply broadcasts the scrollstop event down
   * the scope of the element.
   */
  .directive('hgScrollstop', function($parse, hgScrollEvent) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attributes) {
        var fn = $parse(attributes.hgScrollstop);


        hgScrollEvent.scrollstop(element, function(event) {
          fn(scope, {
            event: event
          });
        });
      }
    };
  });
