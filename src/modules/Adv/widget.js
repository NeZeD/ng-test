(function(){
	angular.module('channel-page')
		.directive('adv', function(){
			return {
				restrict: 'E',
				templateUrl: 'Adv/view.html'
			}
		});
})();