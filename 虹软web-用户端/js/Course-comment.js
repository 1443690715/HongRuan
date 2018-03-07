
// JavaScript Document
// $(document).ready(function(e) {

//   'use strict';
  
//   angular
//     .module('commentsApp', [])
//     .controller('CommentsController', CommentsController);
  
//   // Inject $scope dependency.
//   CommentsController.$inject = ['$scope'];
  
//   // Declare CommentsController.
//   function CommentsController($scope) {
//     var vm = this;
    
//     // Current comment.
//     vm.comment = {};

//     // Array where comments will be.
//     vm.comments = [];

//     // Fires when form is submited.
//     vm.addComment = function() {
//       // Fixed img.
//       vm.comment.avatarSrc = 'http://lorempixel.com/200/200/people/';

//       // Add current date to the comment.
//       vm.comment.date = Date.now();

//       vm.comments.push( vm.comment );
//       vm.comment = {};

//       // Reset clases of the form after submit.
//       $scope.form.$setPristine();
//     }

//     // Fires when the comment change the anonymous state.
//     vm.anonymousChanged = function(){
//       if(vm.comment.anonymous)
//         vm.comment.author = "";
//     }
//   }

//     // Open Popup Js
//     $(".popupheading").mouseover( function(){
//       $(".popupheading").fadeIn("200");  
//     });
//     // Close Popup Js
//     $(".popupheading").mouseout( function(){
//       $(".popupheading").fadeOut("200");

 
//     });
// });


// alert("jrjg22222222222222");
// var notice=document.getElementById("noticePic");
//    notice.onclick=function(){
//    window.location.href="inform-deal.html";
// }
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
one.onclick=function(){
  this.className="heart-hover";
  two.className="heart-off";
  three.className="heart-off";
  four.className="heart-off";
  five.className="heart-off";
  alert("jr777777777");
};

two.onmouseover=function(){
  this.className="heart-hover";
  one.className="heart-on";
  three.className="heart-off";
  four.className="heart-off";
  five.className="heart-off";
};

three.onmouseover=function(){
  this.className="heart-hover";
  one.className="heart-on";
  two.className="heart-on";
  four.className="heart-off";
  five.className="heart-off";
};

four.onmouseover=function(){
  this.className="heart-hover";
  one.className="heart-on";
  two.className="heart-on";
  three.className="heart-on";
  five.className="heart-off";
};

five.onmouseover=function(){
  this.className="heart-hover";
  one.className="heart-on";
  two.className="heart-on";
  three.className="heart-on";
  four.className="heart-on";
};