app.factory('whipmeet', ['$http', function($http) { 

    return {
        createWhipmeets: function (obj, success, error) {
            $http.post('/meets', obj, {}).
            then(function (data) {
                success(data)
            }, function (e) {
                error(e);
            });
        },

        getWhipmeets: function (success, error) {
            $http.get('/meets/').
            then(function (data) {
                success(data)
            }, function (e) {
                error(e);
            });
        }

        // getWhipmeets: function (id, success, error) {
        //     $http.get('/meets/'+id).
        //     then(function (data) {
        //         success(data)
        //     }, function (e) {
        //         error(e);
        //     });
        // }

    }

}]);