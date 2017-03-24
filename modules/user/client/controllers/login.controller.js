(() => {
	'use strict';

	angular
		.module('user')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$scope', '$state', '$http'];

	function LoginController ($scope, $state, $http) {
        $scope.email = '';
        $scope.password = '';
        $scope.form = 'default';

        $scope.toggleForm = () => {
            $scope.form = $scope.form == 'default' ? 'signup' : 'default';

        }

        $scope.login = () => {
            const data = {
                email: $scope.login.email,
                password: $scope.login.password
            }

            $http({
                method: 'POST',
                url: 'http://localhost:8080/auth/login',
                data: data
            }).then(success, error);

            function success(response) {
                console.log('Successfully logged in');
                $state.go('home');
            }

            function error(response) {
                console.log(response);
            }
        }
	}

})();
