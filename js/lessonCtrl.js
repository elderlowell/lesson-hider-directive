angular.module('directivePractice').controller('lessonCtrl', function($scope) {
  $scope.lessons = ['Services','Routing','Directives','Review','Firebase','No server project','Node','Express','Mongo'];
  $scope.test = "Two-way data binding!";
  $scope.announceDay = function(lesson, day) {
    if (!day) {
      alert(lesson + ' is not currently scheduled on any day.');
    }
    else {
      alert(lesson + ' is active on ' + day + '.');
    }
  };
  $scope.checked = false;
});
