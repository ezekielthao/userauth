angular.module('signupMod')
.controller('signupCtrl', ['$scope', '$http', function($scope, $http){
	console.log('controller on');

	$scope.runSignup = function() {
		console.log('running runSignup' + $scope.name);

		//Submit to sails server
		$http.post('/signup', {
			name 		: $scope.name,
			email		: $scope.email,
			password 	: $scope.password
		})
		.then(function onSuccess(response){
			window.location = '/user';
		})
		.catch(function onError(err){
			if (err) {
				console.log('Error ' +err);
			}
		});
		
	}
}]);