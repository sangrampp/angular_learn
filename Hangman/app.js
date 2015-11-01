var hangManApp = angular.module('Hangman', []);

hangManApp.controller('mainController', ['$scope', function($scope){
    var word = "SYNAPSE";
    $scope.guess = 6;
    
    var letters = word.split('');
    var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $scope.alpha = [];
    
    alphabets.split('').forEach(function(val){
        $scope.alpha.push({
            ch: val,
            used: false
        });
    });
    
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
    
    
    $scope.process = function(key){
//        console.log('In process() ' + key.ch + key.used);
        key.used = true;
//        console.log('In process() ' + key.ch + key.used);
        $scope.objLetters.forEach(function(obj){
            if(obj.ch === key.ch){
                obj.guessed = true;
            }
        });
    };
    console.log($scope.objLetters);
}]);