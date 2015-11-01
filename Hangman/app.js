var hangManApp = angular.module('Hangman', []);

hangManApp.controller('mainController', ['$scope', function($scope){
    var word = "SUCCESS";
    $scope.triesRemaining = 6;
    $scope.numGuess = 0;
    
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
        if($scope.triesRemaining > 0){
            //        console.log('In process() ' + key.ch + key.used);
            key.used = true;
            var successGuess = false;            
            
    //        console.log('In process() ' + key.ch + key.used);
            $scope.objLetters.forEach(function(obj){
                if(obj.ch === key.ch){
                    obj.guessed = true;
                    successGuess = true;
                    $scope.numGuess ++;
                }                
            });
            if(!successGuess){
                $scope.triesRemaining --;
            }
            if($scope.numGuess === $scope.objLetters.length){
                alert('Game Over! You Win');
            }
        }
        else{
            alert('Game over! I win...');
        }

    };
    console.log($scope.objLetters);
}]);