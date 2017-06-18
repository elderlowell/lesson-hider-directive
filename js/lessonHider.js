angular.module('directivePractice').directive('lessonHider', function() {
  return {
    templateUrl: './views/lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
      crossOut: '='
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
      console.log(111111111, $scope.crossOut)
    },
    link: function (scope, element, attributes) {
      console.log(222222222, scope.crossOut)

      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        crossOut();

        scope.$watch('crossOut', crossOut);

        function crossOut() {
          scope.schedule.forEach(function(scheduleDay) {
            if (scheduleDay.lesson === scope.lesson && scope.crossOut) {
              element.css('text-decoration', 'line-through');
              scope.lessonDay = scheduleDay.weekday;
              return;
            }
            else if (scheduleDay.lesson === scope.lesson && !scope.crossOut)  {
              element.css('text-decoration', 'none');
              scope.lessonDay = scheduleDay.weekday;
              return;
            }
          });
        }
      });
    }
  }
});
