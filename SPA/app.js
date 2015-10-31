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

angularjsWeatherApp.service('weatherservice', function(){
    this.cityName = '';
});

angularjsWeatherApp.controller('cityController', ['$scope', 'weatherservice',  function($scope, weatherservice){
    $scope.cityName = '';
    
    $scope.$watch('cityName', function(){
        console.log($scope.cityName);
        weatherservice.cityName = $scope.cityName;
    });
}]);

angularjsWeatherApp.controller('weatherController', ['$scope', '$resource', 'weatherservice',  function($scope, $resource, weatherservice){
    $scope.cityName = weatherservice.cityName;
    
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherresult = $scope.weatherAPI.get({
        q: $scope.cityName,
        cnt: 2,
        appid: 'bd82977b86bf27fb59a04b61b657fb6f'
    });
    
    console.log($scope.weatherresult);
    
}]);