angular.module("mathix_mentor", ['ngMaterial'])
  .controller("PanelCtrl", 
function( $scope ) {   

  $scope.toggleSidenav = 
    function() {               
      $("#menu_shelve").toggleClass("menu--on");      
      
      var layer = $("#menu_button span:nth-child(1)");
      if($(layer).hasClass("material-design-hamburger__icon--to-arrow")) {
        $(layer).removeClass('material-design-hamburger__icon--to-arrow');
        $(layer).addClass('material-design-hamburger__icon--from-arrow');                  
      } else {
        $(layer).addClass('material-design-hamburger__icon--to-arrow');
        $(layer).removeClass('material-design-hamburger__icon--from-arrow');
      }
    };

  $scope.data = {
    selectedIndex : 0,    

    tab1_title : "Wydarzenia",
    tab2_title : "Studenci",
    tab3_title : "Zadania",

    add_excercise : "Dodaj Zadanie"
  };

  $scope.app_name = "MathiX";
  $scope.menu_sections =
    [
      {
        name: "Mój profil"        
      },
      {
        name: "Wyloguj się"
      },
      {
        name: "Lol"
      }
    ];

  $scope.events = 
    [
      {
        title : "Event 1"
      },
      {
        title : "Event 2"
      },
      {
        title : "Event 3"
      },
      {
        title : "Event 4"
      },
      {
        title : "Event 5"
      },
      {
        title : "Event 6"
      }
    ];

  $scope.students = 
    [
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

  $scope.excercises_assigned = 
    [
      {
        title : "Excercise 1"
      },
      {
        title : "Excercise 2"
      },
      {
        title : "Excercise 3"
      }
    ];

  $scope.excercises_ready = 
    [
      {
        title : "Excercise 4"
      },
      {
        title : "Excercise 5"
      },
      {
        title : "Excercise 6"
      },
      {
        title : "Excercise 4"
      },
      {
        title : "Excercise 5"
      },
      {
        title : "Excercise 6"
      },
      {
        title : "Excercise 4"
      },
      {
        title : "Excercise 5"
      },
      {
        title : "Excercise 6"
      }
    ];
});