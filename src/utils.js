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
  .service('hgUtils', function($rootScope, $document) {

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
      if (typeof element === 'function') {
        fn = element;
        element = $document;
      } else if (!fn){
        fn = angular.noop;
      }

      return {
        element: element,
        scope: element.scope() || $rootScope,
        fn: fn
      };
    };


    /**
     * @doc method
     * @methodOf hg.scrollStop.utils:hgUtils
     * @name standardEl
     *
     * @description
     * Extracts HTMLElement if a JQLite.
     *
     * @param {JQLite|HTMLElement} element HTMLElement or JQLite.
     *
     * @returns {HTMLElement} Extracted HTMLElement.
     */
    this.standardEl = function(element) {
      return element.prop && element.attr && element.find
        ? element[0]
        : element;
    };


    /**
     * @doc method
     * @methodOf hg.scrollStop.utils:hgUtils
     * @name getScrollTop
     *
     * @description
     * Returns the current scroll position
     *
     * @param {JQLite} element JQLite
     *
     * @returns {Number} Current scroll top position of the element.
     */
    this.getScrollTop = function(element) {
      var el = this.standardEl(element);

      return el instanceof HTMLDocument
        ? (el.body.scrollTop || 0)
        : (el.scrollTop || 0);
    };
  });
