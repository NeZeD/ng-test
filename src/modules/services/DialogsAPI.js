(function(){
angular.module('DialogsAPI', ['ngResource'])
	.factory('Dialogs', function($resource){
		return $resource(
			'https://api.mongolab.com/api/1/databases/nezed/collections/dialogs/:id',
			{
			    apiKey: "66AXdjmJeNj3vI0xzxt_0AUgkn12M75M",
			    l: 1
			},
			{update: {method: "PUT"}}
			);
	});
})();