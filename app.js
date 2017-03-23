'use strict';
angular.module('myApp', [])
.controller('myController', function($scope){

  $scope.check = function(){
    var arr = new Array();
    arr = $scope.name.split(",");
    $scope.msg =  arr.length;

    if($scope.name.length == 0) {
      $scope.msg = "Please enter data first";
    }
     else if (arr.length <= 3 && arr.length > 0) {
      $scope.msg = "Enjoy!";
    }
    else {
      $scope.msg = "Too Much!";
    }

}
})
