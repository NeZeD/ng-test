(function(){
angular.module('WeeklyStatAPI', ['ngResource'])
	.factory('WeeklyStat', function($resource){
		return $resource(
			'https://api.mongolab.com/api/1/databases/nezed/collections/weeklyStat',
			{
			    apiKey: "66AXdjmJeNj3vI0xzxt_0AUgkn12M75M",
			    // First object
			    fo: true
			},
			{update: {method: "PUT"}}
			);
	});
})();