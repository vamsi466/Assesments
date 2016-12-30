(function(){

   'use strict'
    angular.module('novoCloud')
    .directive('logo',function(){
        return{
            restrict: 'E',
            templateUrl:'Templates/logoBar.html'
        }
    })
})();
