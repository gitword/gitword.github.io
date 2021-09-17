(function(){
  "use strict";
  
  var contactsApp = angular.module("Contacts", ["ngSanitize","firebase"]);
  angular.module('contactsApp', ['ngSanitize']);
  
  contactsApp.controller("ContactsController", ["$scope", function($scope){
    $scope.test = 'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';
    $scope.contacts = [       
      {text:"Ich <b>hätte</b> gern ein Wasser und einen Kaffee.", translate:""},
      {text:"Wie viel kostet das da/ das hier?", translate:""},
      {text:"Entschuldigung ... ich spreche nicht so gut Deutsch", translate:""},
      {text:"Wie heißt das auf Deutsch?", translate:"Как это будет по-немецки?:"},
      {text:"Ist die Bank sehr weit von hier?", translate:""},
      {text:"Gibt es hier eine Post?", translate:""},
      {text:"Meine Schule ist weit weg von hier", translate:""},
      {text:"In der Apotheke kannst du Medikamente kaufen.", translate:""},
      {text:"Was hast du gestern gemacht?", translate:""},
      {text:"Ich war zu Hause; Ich war beim Arzt; Ich war oft im Park, ich habe viel Sport gemacht.", translate:""},
      {text:"Ich <b>war</b> nur zu Hause. Wir haben am Samstag ein bisschen zu Hause Yoga gemacht. Am Sonntag haben wir Schnitzel gemacht.", translate:""},
      {text:"Ich hatte Fieber oder Ich habe Fieber.", translate:""},
      {text:"Ich habe Essen gemacht. Ich hatte Besuch. ", translate:""},
      {text:"END", translate:""},
    ]
    $scope.titles = [
      {thema: "thema1", id:0},
      {thema: "thema2", id:1}      
    ]
    $scope.add = function () {
      $scope.contacts.push($scope.currentContact);
      $scope.currentContact = {};
    };
  }]);


}());
