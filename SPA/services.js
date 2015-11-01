angularjsWeatherApp.service('weatherservice', function(){
    this.cityName = '';
});

angularjsWeatherApp.service('weatherAPI', ['$resource', function($resource){
    
    this.getweather = function(cityName, days){
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    return weatherAPI.get({
        q: cityName,
        cnt: days,
        appid: 'bd82977b86bf27fb59a04b61b657fb6f'
    });
        
    }
}]);