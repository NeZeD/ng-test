(function(){
	angular.module('channel-page')
		.directive('usernav', function(){
			return {
				restrict: 'E',
				templateUrl: 'UserNav/view.html',
				controller: 'UserNavController'
			}
		});
})();