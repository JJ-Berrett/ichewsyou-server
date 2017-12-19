'use strict';
angular.module('northStarAdmin')
  .service("sessionsSrvc", function ($http) {
    let sessions = [];
    this.getSessions = function () {
      return $http.get('/api/sessions')
        .then(res => {
          sessions = res.data;
          return sessions;
        });
    };

    this.updateSession = function (session) {
      console.log("Updating Session", session);
      return $http.post('/api/updateSession', session)
    };

    this.getSession = function (id) {
      return sessions.find(session => {
        return session.id === parseInt(id);
      })
    };

    this.addSession = function (session) {
      console.log(session);
      return $http.post('/api/addSession', session)
    };

    this.removeSession = function (sessionId) {
      return $http.delete('/api/session/' + sessionId)
    };

    this.getReview = function (reviewId) {
      return $http.get('/api/review/' + reviewId)
    };

    this.getAllReviews = function () {
      return $http.get('/api/reviews')
    };

    this.getQuestions = function (sessionId) {
      return $http.get('/api/questions/' + sessionId)
    };

    this.getMentors = function () {
      return $http.get('/api/mentors')
		};

		this.getMentor = function (mentorId) {
      return $http.get('/api/mentor/' + mentorId)
		};

		this.removeMentor = function (mentorId) {
      return $http.delete('/api/mentor/' + mentorId)
		};

		this.addMentor = function (mentor) {
			console.log(mentor);
			return $http.post('/api/mentor', mentor)
		};

		this.updateMentor = function (mentor) {
			return $http.post('/api/updateMentor', mentor)
		};

	});