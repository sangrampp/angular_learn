var angularjsWeatherApp = angular.module('WeatherAPP', ['ngRoute', 'ngResource']);

angularjsWeatherApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'pages/city.html',
        controller: 'cityController'
    })
    .when('/weather', {
        templateUrl: 'pages/weather.html',
        controller: 'weatherController'
    })
});

angularjsWeatherApp.controller('cityController', ['$scope', function($scope){
    
}]);

angularjsWeatherApp.controller('weatherController', ['$scope', function($scope){
    
}]);