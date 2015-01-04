angular
.module("mathix_mentor.controllers", [])
  .controller("MainCtrl", [ "$scope", 
    function( $scope ) {   
      $scope.selectedPage = 2;
    }]);