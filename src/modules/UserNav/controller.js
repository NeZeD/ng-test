(function(){
	angular.module('channel-page')
		.controller('UserNavController', function ($scope, $element, $templateCache, User) {
		    $scope.user = User.query();

		    $scope.evt = function () { alert(1); }

		})
})();