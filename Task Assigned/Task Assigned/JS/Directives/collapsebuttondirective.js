(function(){

   'use strict'
    angular.module('novoCloud')
    .directive('collapseBar',function(){
        return{
            restrict: 'E',
            templateUrl:'Templates/collapseButton.html'
        }
    })
})();
