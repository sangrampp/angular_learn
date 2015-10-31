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
    .when('/weather/:numdays', {
        templateUrl: 'pages/weather.html',
        controller: 'weatherController'
    })
});

angularjsWeatherApp.service('weatherservice', function(){
    this.cityName = '';
});

angularjsWeatherApp.directive('dailyTemperature', function(){
    return {
        templateUrl: 'directives/dailytemperature.html',
        replace: true
    }    
});

angularjsWeatherApp.controller('cityController', ['$scope', 'weatherservice',  function($scope, weatherservice){
    $scope.cityName = '';
    
    $scope.$watch('cityName', function(){
        console.log($scope.cityName);
        weatherservice.cityName = $scope.cityName;
    });
}]);

angularjsWeatherApp.controller('weatherController', ['$scope', '$resource', '$routeParams', '$filter', 'weatherservice',  function($scope, $resource, $routeParams, $filter,  weatherservice){
    $scope.cityName = weatherservice.cityName;
    $scope.days = $routeParams.numdays || 2;
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherresult = $scope.weatherAPI.get({
        q: $scope.cityName,
        cnt: $scope.days,
        appid: 'bd82977b86bf27fb59a04b61b657fb6f'
    });
    
    $scope.convertToDate = function(dt){
        return $filter('date')(dt*1000, 'MMM dd, yyyy');
    }
    
    $scope.convertToCelsius = function(temp){
        return Math.round(temp - 273);
    }
    
    console.log($scope.weatherresult);
    
}]);