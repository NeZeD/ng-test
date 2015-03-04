(function(){
	angular.module('channel-page')
		.directive('footer', function(){
			return {
				restrict: 'E',
				templateUrl: 'Footer/view.html'
			}
		});
})();