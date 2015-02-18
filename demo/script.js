angular.module('scrollTest', [
  'hg.scrollStop'
])

  // Scroll box test diretive.
  .directive('scrollTest', function() {
    return {
      scope: true,
      link: function(scope) {

        scope.state = {
          scrolling: false
        };

        // Directive usage. See HTML element attributes.
        scope.scrollStart = function(event) {
          scope.state.scrolling = true;
          console.log('Box: Scroll started in direction: ' + event.direction);
        };

        scope.scrollStop = function(event) {
          scope.state.scrolling = false;
          console.log('Box: Scroll stopped in direction: ' + event.direction);
        };
      }
    };
  })

  // Scroll window test diretive.
  .directive('eventTest', function() {
    return {
      scope: true,
      link: function(scope) {

        scope.state = {
          scrolling: false
        };

        // Event usage.
        scope.$on('scrollstart', function() {
          scope.state.scrolling = true;
        });

        scope.$on('scrollstop', function() {
          scope.state.scrolling = false;
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
