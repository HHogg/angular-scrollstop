angular.module('scrollTest', [
  'hg.scrollStop'
])

  // Scroll box test diretive.
  .directive('scrollTest', function() {
    return {
      link: function(scope, element, attributes) {

        // Directive usage. See HTML element attributes.
        scope.scrollStart = function() {
          attributes.$addClass('scrolling');
          console.log('Box: Scroll started');
        };

        scope.scrollStop = function() {
          attributes.$removeClass('scrolling');
          console.log('Box: Scroll stopped');
        };
      }
    };
  })

  // Scroll window test diretive.
  .directive('eventTest', function() {
    return {
      link: function(scope, element, attributes) {

        // Event usage.
        scope.$on('scrollstart', function() {
          attributes.$addClass('scrolling');
        });

        scope.$on('scrollstop', function() {
          attributes.$removeClass('scrolling');
        });
      }
    };
  })

  .controller('scrollTestCtrl', function($scope, hgScrollEvent) {

    // Service usage.
    hgScrollEvent.scrollstart(function() {
      console.log('Window: Scroll started');
    });

    hgScrollEvent.scrollstop(function() {
      console.log('Window: Scroll stopped');
    });

    // Filler contnet
    $scope.textContent =
      'Lorem ipsum dolor sit amet, in decore prodesset voluptatum quo,' +
      'affert sanctus atomorum cum ex! Malis indoctum repudiare sit at, ex ' +
      'vis ocurreret philosophia! Te eam velit graeci feugait. Simul ' +
      'placerat qui et, epicuri delectus conclusionemque ad est, fuisset ' +
      'facilisi pertinacia ea sed!';
  })

  .filter('range', function() {
    return function(input, total) {
      for (var i = 0; i < parseInt(total); ++i) {
        input.push(i);
      }
      return input;
    };
});
