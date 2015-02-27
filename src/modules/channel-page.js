(function(){
    angular.module(
        'channel-page',
        [
            'ChannelAPI',
            'UserAPI',
            'DialogsAPI',
            'PubSub',
            'DiscussionsAPI',

            'ngAnimate',
            'mgcrea.ngStrap',
            'ngSanitize'
        ]);
})();