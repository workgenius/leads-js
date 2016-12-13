'use strict';

angular.module('workgenius', [])

.factory('workgenius', ['$http', '$window', function($http, $window) {

    var service = {};

    // Init with auth data. Must be called first
    service.init = function (username, password) {
        var authdata = $window.btoa(username + ':' + password);
        service.headers = {Authorization: 'Basic ' + authdata};
    };

    // Submit lead
    service.submit = function submit(params) {
        $http.post('https://api.workgeni.us/v1/leads', params, { headers: service.headers })
        .then(function(response) {
            console.log(response);
            if (!response || !response.data || !response.data.jobs) return;

            service.leadId = response.data.id;
            service.jobs = response.data.jobs;
        }, function(response) {
            console.log(response);
            if (!response || !response.data || !response.data.error) return;
            service.error = response.data.error;
        });
    };

    // Apply to a job
    service.apply = function apply(job) {
        $http.post('https://api.workgeni.us/v1/applications', {
            leadId: service.leadId,
            jobId: job.id
        },
        { headers: service.headers })
        .then(function(response) {
            console.log(response);
            if (!response || !response.data || !response.data.redirectUrl) return;
            job.success = true;
            job.redirectUrl = response.data.redirectUrl;
            $window.open(response.data.redirectUrl, "_blank");

        }, function(response) {
            console.log(response);
            if (!response || !response.data || !response.data.error) return;
            job.error = response.data.error;
        });
    };

    service.jobs = [];

    return service;
}]);
