(function(){
angular.module('DiscussionsAPI', ['ngResource'])
	.factory('Discussions', function($resource){
		return $resource(
			'https://api.mongolab.com/api/1/databases/nezed/collections/discussions/:id',
			{
			    apiKey: "66AXdjmJeNj3vI0xzxt_0AUgkn12M75M",
			    id:'@id'
			},
			{
			    update: { method: "PUT" }
			}
			);
	});
})();