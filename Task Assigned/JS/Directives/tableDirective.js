

//directive for table to display with data from controller
(function(){

   'use strict'
    angular.module('novoCloud')
    .directive('revenuetable',function(){
        return{
            restrict: 'E',
            templateUrl:'Templates/revenueTable.html'
        }
    })
})();
