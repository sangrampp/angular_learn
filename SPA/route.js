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