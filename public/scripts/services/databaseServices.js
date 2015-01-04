( function() {
	angular.module("mathix_mentor.databaseServices", [])
		.factory('Student', [
			function() {
				return {
					query: function() {
						return [
							    {
							        name : "Student"
							    },
							    {
							     	name : "Group 1"
							    },
							    {
							     	name : "Group 3"
							    }
							   ];
					},
					add: function(newStudent) {

					}
				}
			}
		])
		.factory('Excercise', [
			function() {
				return {
					query: function() {
						return [];
					},
					add: function(newExcercise) {

					}
				}
			}
		]);
}());