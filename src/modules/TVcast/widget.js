(function(){
	angular.module('channel-page')
		.directive('tvcast', function(){
			return {
				restrict: 'E',
				templateUrl: 'TVcast/view.html',
				controller: 'TVcastController'
			}
		});
})();