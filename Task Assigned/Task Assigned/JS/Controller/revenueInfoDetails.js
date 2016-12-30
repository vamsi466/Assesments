

//controller to get data from revenue.json which was resolved in routing.js
(function(){

   'use strict'
    angular.module('novoCloud')
    .controller('revenueInfoCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

      ajaxcallservice.getExpenditureDetails("JSON/revenueInfo.JSON").then(function(response){
        console.log(response)
        $scope.revenueData = response;
        });

    }])
})();
