(function(){

   'use strict'
    angular.module('novoCloud')
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
