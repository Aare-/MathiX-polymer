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

var orig_db = {
	mentors_counter : 1,
	mentors : [
		{
			id : 0,
			name : "Wojciech",
			surname : "Palacz",
			hashval : "PLCZ"
		}
	],

	students_counter : 8,
 	students : [
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
	 	},
	 	{
		 id : 4,
		 name : "Brienne Junior",
	 	 surname : "of Tarth"
	 	},
	 	{
		 id : 5,
		 name : "Tyrion Junior",
	 	 surname : "Lannister"
	 	},
	 	{
		 id : 6,
		 name : "Joffrey Junior",
	 	 surname : "Barethon"
	 	},
	 	{
		 id : 7,
		 name : "Margaery Junior",
	 	 surname : "Tyrell"
	 	},
	],

	mentor_students : [
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
		},
		{
			mentor : 0,
			student : 4
		},
		{
			mentor : 0,
			student : 5
		},
		{
			mentor : 0,
			student : 6
		},
		{
			mentor : 0,
			student : 7
		}
	],

	groups_counter : 3,
	groups : [
		{
			id : 0,
			mentor : 0,
			visible : true,
			name : "Wszyscy"
		},
		{
			id : 1,
			mentor : 0,
			visible : true,
			name : "Studia"
		},
		{
			id : 2,
			mentor : 0,
			visible : true,
			name : "Gimbazjum"
		}
	],

	groups_students_counter : 16,
	groups_students : [
		{
			id : 0,
			group : 0,
			student : 1
		},
		{
			id : 1,
			group : 0,
			student : 2
		},
		{
			id : 2,
			group : 0,
			student : 3
		},
		{
			id : 3,
			group : 0,
			student : 4
		},
		{
			id : 4,
			group : 0,
			student : 5
		},
		{
			id : 5,
			group : 0,
			student : 6
		},
		{
			id : 6,
			group : 0,
			student : 7
		},
		{
			id : 7,
			group : 0,
			student : 0
		},
		{
			id : 8,
			group : 1,
			student : 0
		},
		{
			id : 9,
			group : 1,
			student : 1
		},
		{
			id : 10,
			group : 1,
			student : 2
		},
		{
			id : 11,
			group : 1,
			student : 3
		},
		{
			id : 12,
			group : 2,
			student : 4
		},
		{
			id : 13,
			group : 2,
			student : 5
		},
		{
			id : 14,
			group : 2,
			student : 6
		},
		{
			id : 15,
			group : 2,
			student : 7
		}
	],

	excercises_counter : 2,
	excercises : [
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
	],

	assigned_excercises : [
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
	],

	excercise_extra : [
		{		
			excercise : 0,
			type : "text",
			extra : "Prosze zaprojektowac interfejs dla wyszukiwarki internetowej"
		},			
		{		
			excercise : 0,
			type : "uploaded_image",
			extra : "images/uploads/excercises/exc_1.jpeg"
		},		
		{		
			excercise : 0,
			type : "uploaded_image",
			extra : "images/uploads/excercises/exc_1.jpeg"
		},		
		{		
			excercise : 0,
			type : "answer",
			extra : "56"
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
		},
		{		
			excercise : 1,
			type : "uploaded_image",
			extra : "images/uploads/excercises/exc_2.jpg"
		},		
	],

	excercise_solution_counter : 5,
	excercise_solutions : [
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
			score : 4
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
	],

	excercise_solution_extra_counter : 5,
	excercise_solution_extra : [
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
	]
};

var databaseName = "localDatabase";
var db = JSON.parse(localStorage.getItem(databaseName));
function _flushDatabase() {
	localStorage.setItem(databaseName, JSON.stringify(db));
}

if(db == null) {
	db = orig_db;
	_flushDatabase();
}

var _getLoggedUsers = 
	function() {
		return db.mentors[0];
	};

var __loggedStudentId;

var _getLoggedStudents = 
	function() {
		return db.students[__loggedStudentId];
	};

var _loginStudent = 
	function(studentLogin) {
		var cnt = -1;
		if(studentLogin.length < 1)
			return false;
		studentLogin = studentLogin.replace(/\s/g, '');
		db.students.forEach(function(s){
			cnt++;
			var testN = (s.name+s.surname).replace(/\s/g, '');
			if(testN.indexOf(studentLogin) > -1)
				__loggedStudentId = cnt;			
		});		

		return __loggedStudentId >= 0;
	};

var _getExcerciseById = 
	function(id) {
		for(var i =0 ; i < db.excercises.length; i++)
			if(db.excercises[i].id == id)
				return db.excercises[i];
		return null;
	};

var _getDoneExcerciseByStudent = 
	function(student) {
		for(var i =0; i < db.excercise_solutions.length; i++)
			if(db.excercise_solutions[i].student == student)
				return db.excercise_solutions[i];
		return null;
	};

var _getStudentById = 
	function(id) {
		for(var i =0 ; i < db.students.length; i++)
			if(db.students[i].id == id)
				return db.students[i];
		return null;	
	};

var _getGroupById =
	function(id) {
		for(var i =0 ; i < db.groups.length; i++)
			if(db.groups[i].id == id)
				return db.groups[i];
		return null;	
	};

var _getStudents = 
	function() {
		var mentor = _getLoggedUsers();
		var mStudents = db.mentor_students.filter(function(val, id, ar) {
			return (val.mentor == mentor.id);
		});
		
		var studs = [];
		mStudents.forEach(function(val) {
			db.students.forEach(function(s) {
				if(s.id == val.student)
					studs.push(s);
			});
		});
		
		return studs;
	};

var _getStudentSolution =
	function(solutionId) {
		for(var i = 0; i < db.excercise_solutions.length; i++)
			if(db.excercise_solutions[i].id == solutionId)
				return db.excercise_solutions[i];
		return null;
	};

var _rateSolution =
	function(solution_id, score) {
		var solution = _getStudentSolution(solution_id);
		solution.score = score;
		_flushDatabase();
	};

var _getEvents = 
	function () {
		var events_list = [];
		var mentor = _getLoggedUsers();		
		var mentorEventNewSolutions 
			= db.excercise_solutions.filter(function(solution, id, ar) {				
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
	};

var _getEventsStudents = 
	function () {
		var events_list = [];
		var student = _getLoggedStudents();		
		if(student == null) return;

		var studentEventNewSolutions 
			= db.excercise_solutions.filter(function(grade, id, ar) {				
				var doneExcercise = _getDoneExcerciseByStudent(grade.excercise);									 
				return student.id == doneExcercise.student && 
					   grade.score == 0;
			});		

		studentEventNewSolutions.forEach(function(grade) {
			var mentor = _getLoggedUsers();
			var doneExcercise = _getDoneExcerciseByStudent(grade.excercise);
			var excercise = _getExcerciseById(doneExcercise.excercise);
			events_list.push({
				event_type : "solution_rated",
				grade : grade,
				mentor : mentor,
				excercise : excercise
			});
		});		

		return events_list;
	};

var _getExcerciseExtra =
	function(excerciseId) {
		return db.excercise_extra.filter(function(excercise_data, id, ar) {
			return excercise_data.excercise == excerciseId;
		});
	};

return {
	getLoggedUser : _getLoggedUsers,

	getStudentById : _getStudentById,

	getStudents : _getStudents,

	getLoggedStudent : _getLoggedStudents,

	getGroups : function() {
		var mentor = _getLoggedUsers();
		return db.groups.filter(function(val, id, ar) {
			return val.mentor == mentor.id;
		});
	}, 

	loginStudent : _loginStudent,

	getGroupById : _getGroupById,

	addGroup : function(group) {		
		var mentor = _getLoggedUsers();
		var newGroup = {
			id : db.groups_counter++,
			mentor : mentor.id,
			visible : true,
			name : group.name
		};

		groups.push(newGroup);		
		_flushDatabase();

		return newGroup;
	},

	removeGroupById : function(groupId) {
		for(var i = 0; i < db.groups.length; i++)
			if(db.groups[i].id == groupId) {
				db.groups.splice(i, 1);
				_flushDatabase();
				return;
			}
		return;
	},

	addStudentToGroup : function(group, student) {
		var mentor = _getLoggedUsers();
		removeStudentFromGroup(mentor, group, student);
		db.groups_students.push({
			id : db.groups_students_counter++,
			group : group.id,
			student : student.id
		});

		_flushDatabase();
	},

	removeStudentFromGroup : function(group, student) {
		var mentor = _getLoggedUsers();
		db.groups_students = groups_students.filter(function(val, id, ar) {
			return !(val.group == group.id && val.student == student.id);
		});

		_flushDatabase();
	},

	getStudentsFromGroup : function(group) {
		var students_list = [];
		db.groups_students.forEach(function(link){
			if(link.group == group.id) 
				students_list.push(_getStudentById(link.student))
		});
		
		return students_list;
	},

	getExcercises : function() {
		var mentor = _getLoggedUsers();
		return db.excercises.filter(function(val, id, ar) {
			return val.mentor == mentor.id;
		});
	},

	getExcercisesStudent : function () {
		var i=0;
		var student = _getLoggedStudents();
		var doneExcercise = db.excercise_solutions.filter(function(val, id, ar) {
			return val.student == student.id;
		});
			return db.excercises.filter(function(val, id, ar) {
				for(var i = 0; i < doneExcercise.length; i++) {
					if(val.id == doneExcercise[i].excercise)
						return true;
					else
						return false;
				}
		});
	},

	getDoneExcercises : function () {
		var i=0;
		var text="Narazie nie masz żadnych zadań";
		var student = _getLoggedStudents();
		var doneExcercise = db.excercise_solutions.filter(function(val, id, ar) {
			return val.student == student.id;
		});
			return db.excercises.filter(function(val, id, ar) {
				for(var i = 0; i < doneExcercise.length; i++) {
						if(val.id == doneExcercise[i].excercise) 
							return false;
						else
							return true; 
				}
		});
	},

	addExcercise : function(excercise) {
		var mentor = _getLoggedUsers();
		db.excercises.push({
			id : db.excercises_counter++,
			mentor : mentor.id,
			title : excercise.title
		});

		_flushDatabase();
	},

	getExcerciseById : _getExcerciseById,

	getExcerciseExtra : _getExcerciseExtra,

	assignExcercise : function(excercise, group) {
		var mentor = _getLoggedUsers();
		db.assigned_excercises.push({
			excercise : excercise.id,
			group : group.id,
			mentor : mentor.id
		});

		_flushDatabase();
	},

	getAssignedExcercises : function() {
		var mentor = _getLoggedUsers();
		return db.assigned_excercises.filter(function(val, id, ar) {
			return val.mentor = mentor.id;
		});
	},

	rateSolution : _rateSolution,

	getEvents : _getEvents,

	getEventsStudent : _getEventsStudents,

	getStudentSolution : _getStudentSolution

};

}() );