(function(){
	angular.module('channel-page')
		.controller('TVcastController', function ( $scope, $element, Channel, PubSub ) {
			$scope.channel = Channel.get();

			PubSub.subscribe('discussions/created', function () {
			    if ($scope.channel && $scope.channel) {
			        $scope.channel.$update();
			    }
			});

			$scope.discussionOpen = function ( cast ) {
			    PubSub.publish(
                    'discussions/open',
                    cast
                );
			};
		});
})();