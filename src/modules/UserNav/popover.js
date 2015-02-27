(function () {
    angular.module('channel-page')
		.controller('UserNavPopoverController', function ($scope, $element, $templateCache, Dialogs) {
		    $scope.dialogs = Dialogs.query();

		})
})();