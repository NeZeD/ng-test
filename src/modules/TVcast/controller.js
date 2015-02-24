(function(){
	angular.module('channel-page')
		.controller('TVcastController', function ( $scope, Channel ) {
			console.warn(_dbg = $scope);
			$scope.channel = Channel.query();
		});
})();