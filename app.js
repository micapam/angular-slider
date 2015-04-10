angular.module('app', ['ui.slider'])
	.controller('MainCtrl', function($scope) {
		$scope.test = 82;
		$scope.label = 'age';

		$scope.updateValue = function(key, value) {
			console.log(key, value);
		};

//		$scope.transformValue = function(value) {
//			var feet = Math.floor(parseInt(value) / 12);
//			var inches = parseInt(value) % 12;
//
//			return feet + '′' + ' ' + inches + '\″';
//		};


        $scope.transformValue = function(value, floor, ceiling) {
            var minv = Math.log(Math.max(1, floor));
            var maxv = Math.log(ceiling);
            var scale = (maxv-minv) / (ceiling - floor);
            return Math.round(Math.exp(minv + scale * (value - floor)));
        }
	});