var myApp = angular.module('Pacman', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
    .when('/second/', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
});

myApp.service('nameService', function(){
    var self = this;
    self.name = "Sangram Powar";
    self.namelength = function(){
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$timeout', '$filter', 'nameService',  function($scope, $timeout, $filter, nameService){
//	$scope.name = nameService.name;
//    
//    $scope.$watch('name', function(){
//        nameService.name = $scope.name;
//    })
    
    $scope.people = [
        {
        name: "Sangram Powar",
        address: "111, Main St.",
        city: "Kolhapur",
        state: "MH",
        zip: "416003"
        },
        {
        name: "Pandharinath Sanap",
        address: "222, Main St.",
        city: "Pune",
        state: "MH",
        zip: "416003"
        },
        {
        name: "Mannat Powar",
        address: "111, Second St.",
        city: "Kolhapur",
        state: "MH",
        zip: "416003"
        }
    ];
    
    $scope.formattedAddress = function(person){
        return person.address + ", " + person.city + ", " + person.state + " " + person.zip;
    }
    
	// $scope.lowercase = function(){
	// 	return $filter('lowercase')($scope.name);
	// };

	// $scope.characters = 5;

	// $scope.checklength = function(){
	// 	return $scope.name.length !== $scope.characters;
	// }

	// setTimeout(function(){
	// 	$scope.$apply(function(){
	// 		$scope.name = "newchangedName";
	// 		console.log('Registered change');
	// 	});
	// }, 3000);

	// var change = function(){
	// 	$scope.name = "againchangedName";
	// 	console.log('Registered change again');
	// };

	// change();

	// $scope.$watch('name', function(newValue, oldValue){
	// 	console.info('Changed');		
	// 	console.log(oldValue);
	// 	console.log(newValue);
	// });
}]);

myApp.directive('searchResult', function(){
        return {
            restrict: 'AECM',
            templateUrl: 'directives/searchresult.html',
            replace: true,
            scope: {
                personObject: "=",
                formattedAddressFunction: "&"
            }
        }        
    });

myApp.controller('secondController', ['$scope', '$timeout', '$filter', '$routeParams', 'nameService', function($scope, $timeout, $filter, $routeParams, nameService){
	$scope.name = nameService.name;
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    })
	// $scope.lowercase = function(){
	// 	return $filter('lowercase')($scope.name);
	// };

	// $scope.characters = 5;

	// $scope.checklength = function(){
	// 	return $scope.name.length !== $scope.characters;
	// }

	// setTimeout(function(){
	// 	$scope.$apply(function(){
	// 		$scope.name = "newchangedName";
	// 		console.log('Registered change');
	// 	});
	// }, 3000);

	// var change = function(){
	// 	$scope.name = "againchangedName";
	// 	console.log('Registered change again');
	// };

	// change();

	// $scope.$watch('name', function(newValue, oldValue){
	// 	console.info('Changed');		
	// 	console.log(oldValue);
	// 	console.log(newValue);
	// });
}]);

