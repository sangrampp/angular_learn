var hangManApp = angular.module('Hangman', []);

hangManApp.controller('mainController', ['$scope', function($scope){
    var word = "SYNAPSE";
    $scope.guess = 6;
    
    var letters = word.split('');
    
    $scope.objLetters = [];
    
    letters.forEach(function(val){
        $scope.objLetters.push({
            ch: val,
            guessed: false,
            retLetter: function(){
                return this.guessed? this.ch : '-';
            }
        });
    });
    console.log($scope.objLetters);
}]);