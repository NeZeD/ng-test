(function(){
	angular.module('channel-page')
		.controller('DiscussionsController', function ( $scope, Discussions, PubSub ) {
		    $scope.discussions = Discussions.query({ l: 1 });
		    //$scope.discussions = [];

		    PubSub.subscribe('discussions/open', function (topic, cast) {
		        var _d = $scope.discussions,
                    l = _d.length >>> 0;

		        if (!cast.discussionID) {
		            return newDicsussion();
		        }

		        for (var i = 0; i < l; i++) {
		            if (_d[i]._id && _d[i]._id.$oid === cast.discussionID) {
		                return;
		            }
		        }

		        Discussions.get(
                    {
                        id: cast.discussionID
                    },
                    function (data) {
                        console.log(data);
                        $scope.discussions.push(data);
                    },
                    newDicsussion
                );

		        function newDicsussion() {
		            Discussions.save({
		                TVcast: cast,
		                posts: []
		            },
                    function (data) {
                        cast.discussionID = data._id.$oid;
                        PubSub.publish('discussions/created');

                        $scope.discussions.push(data);
                    });
		        }
		    });


		    $scope.comment = function (discussion, childScope) {
		        discussion.posts.push({
		            "user": {
		                "firstName": "Me"
		            },
		            "message": childScope.tplComment,
                    "time": +new Date() / 1000,
		            "likes": {
		                "count": 0,
		                "from": []
		            },
		            "dislikes": 0
		        });
		        childScope.tplComment = '';
		        discussion.$update({ id: discussion._id.$oid });
		    }

		    $scope.like = function (discussion, post) {
		        post.likes.count++;
		        discussion.$update({ id: discussion._id.$oid });
		    }
		    $scope.dislike = function (discussion, post) {
		        post.dislikes++;
		        discussion.$update({ id: discussion._id.$oid });
		    }
		});
})();