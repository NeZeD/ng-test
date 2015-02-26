(function(){
	angular.module('channel-page')
		.controller('UserNavController', function ( $scope, $element, $templateCache ) {
			$scope.popover = {
				title: "Сообщения",
				content: $templateCache.get( 'UserNav/popover.html' ),
				saved: true
			}

		})
})();