/**
 * @ngdoc module
 * @name hg.scrollStop.utils
 *
 * @description
 * Module containing the helping utility service.
 */
angular.module('hg.scrollStop.utils', [ ])

  /**
   * @ngdoc service
   * @name hg.scrollStop.utils:hgUtils
   *
   * @requires $document
   *
   * @description
   * Utility service providing helper methods.
   */
  .service('hgUtils', function($document) {

    /**
     * @doc method
     * @methodOf hg.scrollStop.utils:hgUtils
     * @name checkParams
     *
     * @description
     * Helper method that gives flexibity to the user to provide (or not) params
     * in a different order. For example if the function is set to have an
     * element first and the function second, the user could negate the first
     * parameter and default to $document and just provide the second expected
     * paramter of a function.
     *
     * @param {HTMLElement|function} element Either the element to target
     *        for the scroll start event or the callback function.
     * @param {function} fn Callback function.
     *
     * @returns {object} Checked and converted params.
     */
    this.checkParams = function(element, fn) {
      element = element || $document;
      if (typeof element === 'function' && !fn) {
        fn = element;
        element = $document;
      } else if (!fn){
        fn = angular.noop;
      }

      return {
        element: element,
        fn: fn
      };
    };
  });
