(function () {
    'use strict';

    angular
        .module('novoCloud')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/');
          $stateProvider
              .state('main', {
                  url:'/',
                  controller : 'revenueTable',
                  templateUrl: 'Templates/revenueTable.html',
                  resolve: {
                    revenueDetails: function($http){
                      return  $http.get("../JSON/revenue.JSON").then(function(response) {
                        return response.data.Data;
                        })
                    }

                  }
              });
        }]);
})();
