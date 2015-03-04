(function(){
	angular.module('channel-page')
		.directive('discussions', function(){
			return {
				restrict: 'E',
				templateUrl: 'Discussions/view.html',
				controller: 'DiscussionsController'
			}
		});
})();