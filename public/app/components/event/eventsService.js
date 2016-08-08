angular.module('eventsService', [])


	.factory('Pevent', function($http) {

		var pfactory = {};

		//gets all events
		pfactory.all = function() {
			return $http.get('/api/events');
		};

		pfactory.deleteEvent = function(eventid){
			return $http.delete('/api/events/' + eventid);
		};


		pfactory.create = function(eventData) {
			return $http.post('/api/events', eventData);
		};

		pfactory.update = function(id, eventData) {
			return $http.put('/api/events/' + id, eventData);
		};

		pfactory.delete = function(id) {
			return $http.delete('/api/events/' + id);
		};

		//get a single event
		pfactory.get = function(eventid){
			return $http.get('/api/events/' + eventid);
		};

		//get information about a participant
		pfactory.getParticipant = function(userid) {
			return $http.get('/api/users/' + userid);
		};

		return pfactory;
	});