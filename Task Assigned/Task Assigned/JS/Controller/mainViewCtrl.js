(function(){

   'use strict'
    angular.module('novoCloud')
    .controller('mainViewCtrl',['$scope','$state',function($scope,$state){
      function initState(){
        $state.go('main.table');
      }
      initState();
      }])
})();
