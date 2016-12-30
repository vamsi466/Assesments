(function(){

   'use strict'
    angular.module('novoCloud')
    .directive('sidenav',function(){
        return{
           link: function(scope,element,attribute){
               scope.openNav = function(){
                   var displaySidenav = angular.element(document.querySelector(".sidenav"));
                   displaySidenav.css("width","100%");
                }
                scope.closeNav = function(){
                   var displaySidenav = angular.element(document.querySelector(".sidenav"));
                   displaySidenav.css("width","0%");
                }
           }
        }
    })
})();
