(function(){
	angular.module('channel-page')
		.controller('WeeklyStatController', function ( $scope, $element, WeeklyStat ) {
			$scope.stat = WeeklyStat.get();
		});
})();