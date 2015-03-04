(function(){
    angular.module(
        'channel-page',
        [
            'ChannelAPI',
            'UserAPI',
            'DialogsAPI',
            'PubSub',
            'DiscussionsAPI',
            'WeeklyStatAPI',

            'ngAnimate',
            'mgcrea.ngStrap',
            'ngSanitize'
        ]);
})();