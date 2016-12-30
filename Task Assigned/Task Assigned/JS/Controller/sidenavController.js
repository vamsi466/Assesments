(function(){

   'use strict'
    angular.module('novoCloud')
    .controller('sideNavCtrl',['$scope',function($scope){
        $scope.sideNavElements =["Farmer Dashboard","Production","Food Safety","Traceablity","Recall/Incident Tracking"]
    }])
})();
