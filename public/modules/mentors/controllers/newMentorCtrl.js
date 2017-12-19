'use strict';
angular.module('northStarAdmin')
  .controller('newMentorCtrl',
    function ($scope, sessionsSrvc) {
      $scope.addMentor = function(mentor){
        console.log(mentor);
          sessionsSrvc.addMentor(mentor)
            .then(result => {
              if(result.data === "500"){
                $scope.creationFailure = true;
              }
             else {
                $scope.creationFailure = false;
                $scope.creationSuccess = true;
              }

            })
      };

      $scope.resetForm = function () {
        document.getElementById("newSessionForm").reset();
      }
    });