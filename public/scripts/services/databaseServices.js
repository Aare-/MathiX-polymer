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

var excercises_counter = 1;
var excercises = [
	{
		id : 0,
		mentor : 0,
		title : "Testowe zadanie",		
	}
];

var assigned_excercises = [
	{
		excercise : 0,
		group : 0,
		mentor : 0
	}
];

var excercise_extra = [
	{		
		excercise : 0,
		type : 0,
		extra : "2 + 2 = ?, prosze szybko rozwiazac"
	},	
	{		
		excercise : 0,
		type : 2,
		extra : "4"
	}
];

var excercise_solution_counter = 2;
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
		student : 3,
		excercise : 0,
		accepted : 0,
		mentor_comment : "",
		score : 0
	}
];

var excercise_solution_extra_counter = 2;
var excercise_solution_extra = [
	{
		id : 0,
		solution : 0,
		type : 0,
		extra : "6"
	},
	{
		id : 1,
		solution : 1,
		type : 0,
		extra : "4"
	}
];

var _getLoggedUsers = 
function() {
	return mentors[0];
};

return {
	getLoggedUser : _getLoggedUsers,

	getStudents : function() {
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
	},

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
	}

};

}() );