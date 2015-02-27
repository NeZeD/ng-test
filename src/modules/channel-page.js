(function(){
    angular.module(
        'channel-page',
        [
            'ChannelAPI',
            'UserAPI',
            'DialogsAPI',
            'PubSub',

            'ngAnimate',
            'mgcrea.ngStrap',
            'ngSanitize'
        ]);
})();