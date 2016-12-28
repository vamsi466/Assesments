

(function(){

   'use strict'
    angular.module('novoCloud')
.factory('ajaxcallservice',['$http',function($http){
    return {
        getExpenditureDetails : function(JSONpath){
            return  $http.get(JSONpath).then(function(response){ //wrap it inside another promise using then
                        return response.data.Data;  //only return employees
                    });
        }
    }
}])
//define controller and inject ajaxcall service as dependency.
.controller('revenueTable',['$scope','revenueDetails',function($scope,revenueDetails){
    // $scope.httpPath="JSON/employeedetails.json"
    $scope.revenueDetails= revenueDetails;
    console.log($scope.revenueDetails)

}])
.controller('graphCtrl',['ajaxcallservice','$scope',function(ajaxcallservice,$scope){

  ajaxcallservice.getExpenditureDetails("JSON/graphData.JSON").then(function(response){
    console.log(response)
    $scope.graphDetails = response;
    displayGraph($scope.graphDetails)
    });


    var displayGraph=function(graphDetails) {
        console.log(graphDetails)
      var chart = new CanvasJS.Chart("chartContainer",
      {
          data:
           [
            {
              dataPoints:graphDetails,
              type: "pie",
            // toolTipContent: "{indexLabel}: <strong>${y}</strong>",
              indexLabel: "{indexlabel} ${y}"
            }
          ]
      });
      chart.render();
    }
}])



})();
