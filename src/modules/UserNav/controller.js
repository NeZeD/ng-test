(function(){
	angular.module('channel-page')
		.controller('UserNavController', function ($scope, $element, $templateCache, User) {
		    $scope.user = User.query();

			$scope.popover = {
				title: "Сообщения",
				content: $templateCache.get( 'UserNav/popover.html' ),
				saved: true
			}

		})
})();