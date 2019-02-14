(function() {

    // 'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function ($scope) {
        $scope.name ="";
        $scope.totalValue = 0;

        $scope.displayNumeric = fuction () {
            var totalNameValue = 0;//get the total value
            $scope.totalValue = totalNameValue;
        };

        $scope.displayNumeric = function () {
            var totalNameValue = 
            calculatNumericForString($scope.namek);
            //get the total value
            $scope.totalValue = totalNameValue;
        }

       function calculatNumericForString(string) {
           totalStringValue = 0;
           for (var i=0; i<string.length; i++) {
               totalStringValue += string.charCodeAt(i);
           }
       }
       
       return totalStingValue;
    });
})();