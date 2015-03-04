(function(){
	angular.module('channel-page')
		.directive('weeklystat', function(){
			return {
				restrict: 'E',
				templateUrl: 'WeeklyStat/view.html',
				controller: 'WeeklyStatController'
			}
		});
})();