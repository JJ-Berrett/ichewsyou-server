'use strict';
angular.module('northStarAdmin')
	.controller('mentorCtrl', function ($scope, sessionsSrvc, $timeout, $routeParams) {
		if($routeParams.id){
			console.log($routeParams.id);
			sessionsSrvc.getMentor($routeParams.id)
				.then(function (result) {
					$scope.mentor = result.data[0];
					console.log($scope.mentor)
				})
		}
		$scope.updateMentor = function (mentor) {
			console.log(JSON.stringify(mentor));
			sessionsSrvc.updateMentor(mentor)
				.then(result => {
					console.log(' here is the result' ,result);
					$scope.mentorUpdated = true;
					getAllMentors();
				})
		};

		function getAllMentors() {
			sessionsSrvc.getMentors()
				.then(mentors => {
					$scope.mentors = mentors.data;
				});
		}


		$scope.removeMentor = function () {
			sessionsSrvc.removeMentor($scope.mentorToBeRemoved)
				.then(() => {
					$scope.mentorRemoved = true;
					getAllMentors();
					resetAlerts()
				});

		};

		getAllMentors();

		function resetAlerts() {
			$timeout(function () {
				$scope.mentorRemoved = false;
				$scope.mentorUpdated = false;
			}, 4000);
		}

		$('#removeSession').on('show.bs.modal', function(e) {

			let $modal = $(this),
				mentorData = e.relatedTarget.id;
			let mentor = mentorData.split(', ');
			console.log(mentor);
			$scope.mentorToBeRemoved = mentor[0];
			let name = mentor[1];
			$modal.find('.mentorTitle').html(name);
		})

	});