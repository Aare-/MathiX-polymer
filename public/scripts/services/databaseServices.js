/** UTILS **/
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisp*/) {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }

    return res;
  };
}
/** END OF UTILS **/

var Database = ( function() {

var mentors_counter = 1;
var mentors = [
	{
		id : 0,
		name : "Wojciech",
		surname : "Palacz",
		hashval : "PLCZ"
	}
];

var students_counter = 4;
var students = [
	{
	 id : 0,
	 name : "Tyrion",
 	 surname : "Lannister"
 	},
 	{
	 id : 1,
	 name : "Joffrey",
 	 surname : "Barethon"
 	},
 	{
	 id : 2,
	 name : "Margaery",
 	 surname : "Tyrell"
 	},
 	{
	 id : 3,
	 name : "Brienne",
 	 surname : "of Tarth"
 	}
];

var mentor_students = [
	{
		mentor : 0,
		student : 0
	},
	{
		mentor : 0,
		student : 1
	},
	{
		mentor : 0,
		student : 2
	},
	{
		mentor : 0,
		student : 3
	}
];

var groups_counter = 1;
var groups = [
	{
		id : 0,
		mentor : 0,
		visible : true,
		name : "Testowa Grupa"
	}
];

var groups_students_counter = 2;
var groups_students = [
	{
		id : 0,
		group : 0,
		student : 1
	},
	{
		id : 0,
		group : 0,
		student : 2
	}
];

var excercises_counter = 2;
var excercises = [
	{
		id : 0,
		mentor : 0,
		title : "Interfejsy graficzne",		
	},
	{
		id : 1,
		mentor : 0,
		title : "Matematyka Dyskretna",		
	}
];

var assigned_excercises = [
	{
		excercise : 0,
		group : 0,
		mentor : 0
	},
	{
		excercise : 1,
		group : 0,
		mentor : 0
	}
];

var excercise_extra = [
	{		
		excercise : 0,
		type : "text",
		extra : "Prosze zaprojektowac interfejs dla wyszukiwarki internetowej"
	},			
	{		
		excercise : 1,
		type : "text",
		extra : "2 + 2 = ?, prosze szybko rozwiazac"
	},		
	{		
		excercise : 1,
		type : "answer",
		extra : "4"
	}
];

var excercise_solution_counter = 5;
var excercise_solutions = [
	{
		id : 0,
		student : 0,		
		excercise : 0,
		accepted : 0,
		mentor_comment : "",
		score : 0
	},
	{
		id : 1,
		student : 1,		
		excercise : 0,
		accepted : 0,
		mentor_comment : "",
		score : 0
	},
	{
		id : 2,
		student : 2,		
		excercise : 1,
		accepted : 0,
		mentor_comment : "",
		score : 0
	},
	{
		id : 3,
		student : 3,		
		excercise : 0,
		accepted : 0,
		mentor_comment : "",
		score : 0
	},
	{
		id : 4,
		student : 0,		
		excercise : 1,
		accepted : 0,
		mentor_comment : "",
		score : 0
	}
];

var excercise_solution_extra_counter = 5;
var excercise_solution_extra = [
	{
		id : 0,
		solution : 0,
		type : "text",
		extra : "6"
	},
	{
		id : 1,
		solution : 1,
		type : "text",
		extra : "4"
	},
	{
		id : 2,
		solution : 2,
		type : "text",
		extra : "asd"
	},
	{
		id : 3,
		solution : 3,
		type : "text",
		extra : "lll"
	},
	{
		id : 4,
		solution : 4,
		type : "text",
		extra : "ooo"
	}
];

var _getLoggedUsers = 
	function() {
		return mentors[0];
	};

var _getExcerciseById = 
	function(id) {
		for(var i =0 ; i<excercises.length; i++)
			if(excercises[i].id == id)
				return excercises[i];
		return null;
	};

var _getStudentById = 
	function(id) {
		for(var i =0 ; i < students.length; i++)
			if(students[i].id == id)
				return students[i];
		return null;	
	};

var _getStudents = 
	function() {
		var mentor = _getLoggedUsers();
		var mStudents = mentor_students.filter(function(val, id, ar) {
			return (val.mentor == mentor.id);
		});
		
		var studs = [];
		mStudents.forEach(function(val) {
			students.forEach(function(s) {
				if(s.id == val.student)
					studs.push(s);
			});
		});
		
		return studs;
	};

var _getStudentSolution =
	function(solutionId) {
		for(var i = 0; i < excercise_solutions.length; i++)
			if(excercise_solutions[i].id == solutionId)
				return excercise_solutions[i];
		return null;
	};

return {
	getLoggedUser : _getLoggedUsers,

	getStudentById : _getStudentById,

	getStudents : _getStudents,	

	getGroups : function() {
		var mentor = _getLoggedUsers();
		return groups.filter(function(val, id, ar) {
			return val.mentor == mentor.id;
		});
	}, 

	addGroup : function(group) {		
		var mentor = _getLoggedUsers();
		var newGroup = {
			id : groups_counter++,
			mentor : mentor.id,
			visible : true,
			name : group.name
		};

		groups.push(newGroup);		

		return newGroup;
	},

	addStudentToGroup : function(group, student) {
		var mentor = _getLoggedUsers();
		removeStudentFromGroup(mentor, group, student);
		groups_students.push({
			id : groups_students_counter++,
			group : group.id,
			student : student.id
		});
	},

	removeStudentFromGroup : function(group, student) {
		var mentor = _getLoggedUsers();
		groups_students = groups_students.filter(function(val, id, ar) {
			return !(val.group == group.id && val.student == student.id);
		});
	},

	getStudentsFromGroup : function(group) {
		//TODO: implement
		return students;
	},

	getExcercises : function() {
		var mentor = _getLoggedUsers();
		return excercises.filter(function(val, id, ar) {
			return val.mentor == mentor.id;
		});
	},

	addExcercise : function(excercise) {
		var mentor = _getLoggedUsers();
		excercises.push({
			id : excercises_counter++,
			mentor : mentor.id,
			title : excercise.title
		});
	},

	getExcerciseById : _getExcerciseById,

	assignExcercise : function(excercise, group) {
		var mentor = _getLoggedUsers();
		assigned_excercises.push({
			excercise : excercise.id,
			group : group.id,
			mentor : mentor.id
		});
	},

	getAssignedExcercises : function() {
		var mentor = _getLoggedUsers();
		return assigned_excercises.filter(function(val, id, ar) {
			return val.mentor = mentor.id;
		});
	},

	getEvents : function () {
		var events_list = [];
		var mentor = _getLoggedUsers();		
		var mentorEventNewSolutions 
			= excercise_solutions.filter(function(solution, id, ar) {				
				var excercise = _getExcerciseById(solution.excercise);									 
				return mentor.id == excercise.mentor && 
					   solution.score == 0;
			});		

		mentorEventNewSolutions.forEach(function(solution) {
			var student = _getStudentById(solution.student);
			var excercise = _getExcerciseById(solution.excercise);
			events_list.push({
				event_type : "new_solution",
				solution : solution,
				student : student,
				excercise : excercise
			});
		});		

		return events_list;
	},

	getStudentSolution : _getStudentSolution

};

}() );