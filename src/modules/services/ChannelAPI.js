(function(){
angular.module('ChannelAPI', ['ngResource'])
	.factory('Channel', function($resource){
		return $resource(
			'https://api.mongolab.com/api/1/databases/nezed/collections/currentChannel/54ea336ce4b0b6534ff8b190',
			{
			    apiKey: "66AXdjmJeNj3vI0xzxt_0AUgkn12M75M"
			},
			{update: {method: "PUT"}}
			);
	});
})();