
angularjsWeatherApp.directive('dailyTemperature', function(){
    return {
        templateUrl: 'directives/dailytemperature.html',
        replace: true,
        scope: {
            weatherObject: '=',
            convertToDate: '&',
            convertTemperature: '&'
        }
    }    
});