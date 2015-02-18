angular.module('scrollTest', [
  'hg.scrollStop'
])

  // Scroll box test diretive.
  .directive('scrollTest', function() {
    return {
      link: function(scope, element, attributes) {

        // Directive usage. See HTML element attributes.
        scope.scrollStart = function(event) {
          attributes.$addClass('scrolling');
          console.log('Box: Scroll started in direction: ' + event.direction);
        };

        scope.scrollStop = function(event) {
          attributes.$removeClass('scrolling');
          console.log('Box: Scroll stopped in direction: ' + event.direction);
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
    hgScrollEvent.scrollstart(function(event) {
      console.log('Window: Scroll started in direction: ' + event.direction);
    });

    hgScrollEvent.scrollstop(function(event) {
      console.log('Window: Scroll stopped in direction: ' + event.direction);
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
