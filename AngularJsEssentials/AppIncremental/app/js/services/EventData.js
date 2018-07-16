eventsApp.factory('eventData', function ($http, $log) { //inyecto el built-in service $http
    return {
        getEvent: function (successCallback) {
            $http({ method: 'GET', url: '/data/event/1' }).
                success(function (data, status, headers, config) {
                    successCallback(data);
                }).
                error(function (data, status, headers, config) {
                    $log.warn(data, status, headers(), config);                    
                });
        }
    }
});