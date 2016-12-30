(function(){

   'use strict'
    angular.module('novoCloud')
    .directive('itemsnavbar',function(){
        return{
            restrict: 'E',
            templateUrl:'Templates/itemsNavBar.html'
        }
    })
})();
