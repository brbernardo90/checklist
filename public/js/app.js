// var app = angular.module('cultCampinasApp', ['ngRoute']);

var app = angular.module('cultCampinasApp');


function ListaComprasController($scope) {
  // $scope.itens = [
  //     {produto: 'Leite', quantidade: 2, comprado: false},
  //     {produto: 'Cerveja', quantidade: 12, comprado: false}
  // ];

  $http.get("https://questions-impact.herokuapp.com/questions").success(function(data) {

              $scope.itens = data;

          });

}

//
// app.controller('agendaController', ['$scope','$rootScope', '$http', '$compile', '$location',
//
//     function($scope,$rootScope, $http, $compile, $location) {
//
//         // META TAGS
//
//
//         $scope.customer = $http.get("/api/cult").success(function(data) {
//
//             $scope.data = data;
//
//             $scope.events = data;
//
//             for (var i = 0; i < $scope.events.length; i++) {
//
//                 $scope.newbuildTagQtdNumbers(i, $scope.events[i].tag, $scope);
//
//             }
//
//         });
//
//
//
// app.filter('startFrom', function() {
//     return function(input, start) {
//         if(input) {
//             start = +start; //parse to int
//             return input.slice(start);
//         }
//         return [];
//     }
// });
//
//
// app.filter('myfilter', function() {
//   return function(events, date) {
//   	var filtered = [];
//
//   	if( date === undefined || date == ""){
//
//   	} else {
//
// 	  	index = date.indexOf('-');
// 	  	monthTarget = date.substring(0,index);
// 	  	dayTarget = date.substring(index + 1);
// 	}
//
//
//     angular.forEach(events, function(targetEvent){
//
//
//     	if(!date){
//
//     		filtered.push(targetEvent);
//
//     	} else {
//
//     		k = 0;
//
//     		pushed = true;
//
//     		length = targetEvent.date.length;
//
//             while( pushed && (k < length)){
//
//                 console.log('while');
//                 var targetDate = new Date(targetEvent.date[k]);
//                 var targetDatefilter = (targetDate.getMonth() + 1) + "-" + targetDate.getDate();
//                 if(targetDatefilter == date){
//                     filtered.push(targetEvent);
//                     pushed = false;
//                 }
//
//                 k++;
//
//     	   }
//
//     }
//
//
//     });
//
//     return filtered;
// }});
