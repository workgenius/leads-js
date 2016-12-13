'use strict';

// Declare app level module which depends on views, and components
angular.module("app", [
    'workgenius'
])
.controller('myCtrl', function($scope, workgenius) {
    workgenius.init('API_USERNAME', 'API_PASSWORD');
    workgenius.submit({
        name: "shashank Bharadwaj",
        email: "shashu23@gmail.com",
        phone: "15103055873"
    });
    $scope.workgenius = workgenius;
});