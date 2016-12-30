

//controller to get data from revenue.json which was resolved in routing.js
(function(){

   'use strict'
    angular.module('novoCloud')
    .controller('revenueTable',['$scope','revenueDetails',function($scope,revenueDetails){
        // $scope.httpPath="JSON/employeedetails.json"
        $scope.revenueDetails= revenueDetails;
        console.log($scope.revenueDetails)

    }])
})();
