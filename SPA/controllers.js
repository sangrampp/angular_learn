angularjsWeatherApp.controller('cityController', ['$scope', '$location', 'weatherservice',  function($scope, $location, weatherservice){
    $scope.cityName = '';
    
    $scope.$watch('cityName', function(){
        console.log($scope.cityName);
        weatherservice.cityName = $scope.cityName;
    });
    
    $scope.submit = function(){
        $location.path('/weather');
    };
}]);

angularjsWeatherApp.controller('weatherController', ['$scope', '$resource', '$routeParams', '$filter', 'weatherservice', 'weatherAPI',  function($scope, $resource, $routeParams, $filter,  weatherservice, weatherAPI){
    $scope.cityName = weatherservice.cityName;
    $scope.days = $routeParams.numdays || '2';
        
    $scope.weatherresult = weatherAPI.getweather($scope.cityName, $scope.days);
    
    $scope.convertToDate = function(dt){
        return $filter('date')(dt*1000, 'MMM dd, yyyy');
    }
    
    $scope.convertToCelsius = function(temp){
        return Math.round(temp - 273);
    }
    
    console.log($scope.weatherresult);
    
}]);